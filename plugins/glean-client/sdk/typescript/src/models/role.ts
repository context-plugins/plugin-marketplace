import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** DEPRECATED - use permissions instead. Viewer's role on the specific document. */
export const Role = {
  AnswerModerator: "ANSWER_MODERATOR",
  Owner: "OWNER",
  Viewer: "VIEWER",
} as const;
export type Role = (typeof Role)[keyof typeof Role] | (string & {});

export const roleSchema: EnumSchema<Role> = s.enumOf<Role>(Role);
