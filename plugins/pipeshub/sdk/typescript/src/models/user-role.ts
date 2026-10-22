import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** User's role in this knowledge base */
export const UserRole = {
  Owner: "OWNER",
  Writer: "WRITER",
  Reader: "READER",
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole] | (string & {});

export const userRoleSchema: EnumSchema<UserRole> = s.enumOf<UserRole>(UserRole);
