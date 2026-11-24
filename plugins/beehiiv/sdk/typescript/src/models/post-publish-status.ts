import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PostPublishStatus = {
  Draft: "draft",
  Confirmed: "confirmed",
} as const;
export type PostPublishStatus = (typeof PostPublishStatus)[keyof typeof PostPublishStatus] | (string & {});

export const postPublishStatusSchema: EnumSchema<PostPublishStatus> =
  s.enumOf<PostPublishStatus>(PostPublishStatus);
