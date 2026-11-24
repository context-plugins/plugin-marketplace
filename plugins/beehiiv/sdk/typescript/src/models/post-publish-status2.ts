import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Transition the post's status. Use `confirmed` to schedule or publish a draft post. Only the
 * `draft` → `confirmed` transition is supported — a confirmed post cannot be moved back to `draft`.
 */
export const PostPublishStatus2 = {
  Draft: "draft",
  Confirmed: "confirmed",
} as const;
export type PostPublishStatus2 = (typeof PostPublishStatus2)[keyof typeof PostPublishStatus2] | (string & {});

export const postPublishStatus2Schema: EnumSchema<PostPublishStatus2> =
  s.enumOf<PostPublishStatus2>(PostPublishStatus2);
