import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const user = await User.findById(params.id).populate("creator");

    if (!user) return new Response("Yard Sale not found.", { status: 404 });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all Yard Sales!", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { user, tag } = await request.json();

  try {
    await connectToDB();

    const existingUser = await user.findById(params.id);

    if (!existingUser)
      return new Response("Yard Sale not found.", { status: 404 });

    existingUser.user = user;
    existingUser.tag = tag;

    await existingUser.save();

    return new Response(JSON.stringify(existingUser), { status: 200 });
  } catch (error) {
    return new Response("Failed to update user.", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await User.findByIdAndRemove(params.id);

    return new Response("user deleted successfully.", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete user.", { status: 500 });
  }
};
