import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The member's initial role, if you are using a base role for the initial role */
export const Role1 = {
  Reader: "reader",
  Writer: "writer",
  Admin: "admin",
  NoAccess: "no_access",
} as const;
export type Role1 = (typeof Role1)[keyof typeof Role1] | (string & {});

export const role1Schema: EnumSchema<Role1> = s.enumOf<Role1>(Role1);
