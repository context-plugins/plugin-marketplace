import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Spend \& Expense User role type for creating and updating a user's role. */
export const InputRoleType = {
  Admin: "ADMIN",
  Auditor: "AUDITOR",
  Bookkeeper: "BOOKKEEPER",
  Member: "MEMBER",
} as const;
export type InputRoleType = (typeof InputRoleType)[keyof typeof InputRoleType] | (string & {});

export const inputRoleTypeSchema: EnumSchema<InputRoleType> = s.enumOf<InputRoleType>(InputRoleType);
