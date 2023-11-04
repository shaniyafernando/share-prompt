"use client"

import * as z from "zod"

const userValidation = z.object({
    profile_photo: z.string().url(),
    name: z.string().min(3).max(30),
    username: z.string().min(3).max(30),
    bio: z.string().min(3).max(1000)
})

export default userValidation
