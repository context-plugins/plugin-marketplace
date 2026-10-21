import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UserRole1 = {
  Owner: "OWNER",
  Writer: "WRITER",
  Reader: "READER",
} as const;
export type UserRole1 = (typeof UserRole1)[keyof typeof UserRole1] | (string & {});

export const userRole1Schema: EnumSchema<UserRole1> = s.enumOf<UserRole1>(UserRole1);
