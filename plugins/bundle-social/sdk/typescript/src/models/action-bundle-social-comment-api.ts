import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ActionBundleSocialCommentApi = {
  Delete: "DELETE",
  Hide: "HIDE",
  Unhide: "UNHIDE",
  Like: "LIKE",
  Unlike: "UNLIKE",
  Approve: "APPROVE",
  Reject: "REJECT",
} as const;
export type ActionBundleSocialCommentApi =
  | (typeof ActionBundleSocialCommentApi)[keyof typeof ActionBundleSocialCommentApi]
  | (string & {});

export const actionBundleSocialCommentApiSchema: EnumSchema<ActionBundleSocialCommentApi> =
  s.enumOf<ActionBundleSocialCommentApi>(ActionBundleSocialCommentApi);
