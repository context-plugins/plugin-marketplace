import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The platform that the post is or will be published to. */
export const PostPlatform = {
  Web: "web",
  Email: "email",
  Both: "both",
} as const;
export type PostPlatform = (typeof PostPlatform)[keyof typeof PostPlatform] | (string & {});

export const postPlatformSchema: EnumSchema<PostPlatform> = s.enumOf<PostPlatform>(PostPlatform);
