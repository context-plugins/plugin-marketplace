import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the post. If not provided, the default (`draft`) value will be used and the post
 * will not be scheduled or published. Explicitly pass `confirmed` to have the post publish
 * immediately (if no `scheduled_at` is provided) or at the `scheduled_at` time.
 */
export const PostPublishStatus1 = {
  Draft: "draft",
  Confirmed: "confirmed",
} as const;
export type PostPublishStatus1 = (typeof PostPublishStatus1)[keyof typeof PostPublishStatus1] | (string & {});

export const postPublishStatus1Schema: EnumSchema<PostPublishStatus1> =
  s.enumOf<PostPublishStatus1>(PostPublishStatus1);
