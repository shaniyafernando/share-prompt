"use server";

import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";
import User from "../models/user.model";

interface Prompt{
  name: string;
  username: string;
  userId: string;
  bio: string;
  image: string;
  path: string;
}

export async function updateUser({
  name,
  path,
  username,
  userId,
  bio,
  image,
}: Prompt): Promise<void> {
  connectToDB();

  try{
  await User.findOneAndUpdate(
    { id: userId },
    {
      username: username.toLowerCase(),
      name,
      bio,
      image,
      onboarded: true,
    },
    { upsert: true }
  );

  if (path === "/profile/edit") {
    revalidatePath(path);
  }
} catch (error: any) {
  throw new Error(`Failed to create/update user: ${error.message}`);
}
}

export async function fetchUser(userId: string) {
    try {
      connectToDB();
  
      return await User.findOne({ id: userId })
    //   .populate({
    //     path: "communities",
    //     model: Community,
    //   })
    } catch (error: any) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }
