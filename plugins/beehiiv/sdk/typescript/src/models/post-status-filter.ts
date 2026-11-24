import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PostStatusFilter = {
  Draft: "draft",
  Confirmed: "confirmed",
  Archived: "archived",
  All: "all",
} as const;
export type PostStatusFilter = (typeof PostStatusFilter)[keyof typeof PostStatusFilter] | (string & {});

export const postStatusFilterSchema: EnumSchema<PostStatusFilter> =
  s.enumOf<PostStatusFilter>(PostStatusFilter);
