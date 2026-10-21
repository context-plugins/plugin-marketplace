import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RoleAssigneeType = {
  User: "user",
  ApiKeyPair: "api-key-pair",
} as const;
export type RoleAssigneeType = (typeof RoleAssigneeType)[keyof typeof RoleAssigneeType] | (string & {});

export const roleAssigneeTypeSchema: EnumSchema<RoleAssigneeType> =
  s.enumOf<RoleAssigneeType>(RoleAssigneeType);
