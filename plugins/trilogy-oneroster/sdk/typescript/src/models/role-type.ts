import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RoleType = {
  Primary: "primary",
  Secondary: "secondary",
} as const;
export type RoleType = (typeof RoleType)[keyof typeof RoleType] | (string & {});

export const roleTypeSchema: EnumSchema<RoleType> = s.enumOf<RoleType>(RoleType);
