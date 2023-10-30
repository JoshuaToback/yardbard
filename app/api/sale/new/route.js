import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, user, tag } = await request.json();

    try {
        await connectToDB();
        const newUser = new User({ creator: userId, user, tag });

        await newUser.save();
        return new Response(JSON.stringify(newUser), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new user", { status: 500 });
    }
}