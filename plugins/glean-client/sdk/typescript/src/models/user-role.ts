import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A user's role with respect to a specific document. */
export const UserRole = {
  Owner: "OWNER",
  Viewer: "VIEWER",
  AnswerModerator: "ANSWER_MODERATOR",
  Editor: "EDITOR",
  Verifier: "VERIFIER",
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole] | (string & {});

export const userRoleSchema: EnumSchema<UserRole> = s.enumOf<UserRole>(UserRole);
