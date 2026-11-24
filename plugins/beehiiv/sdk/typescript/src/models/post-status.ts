import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the post.<br>`draft` - not been scheduled.<br>`confirmed` - The post will be active
 * after the `scheduled_at`.<br>`archived` - The post is no longer active.
 */
export const PostStatus = {
  Draft: "draft",
  Confirmed: "confirmed",
  Archived: "archived",
} as const;
export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus] | (string & {});

export const postStatusSchema: EnumSchema<PostStatus> = s.enumOf<PostStatus>(PostStatus);
