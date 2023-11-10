"use client"

import * as z from "zod"

const threadValidation = z.object({
    thread: z.string().min(3,{message:'Minimum 3 characters.'}),
    accountId: z.string()
})

const commentValidation = z.object({
    thread: z.string().min(3,{message:'Minimum 3 characters.'}),
    accountId: z.string()
})

export default threadValidation