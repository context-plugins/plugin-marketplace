import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Leader Node role: <code>primary</code> or <code>standby</code>. */
export const Role = {
  Primary: "primary",
  Standby: "standby",
} as const;
export type Role = (typeof Role)[keyof typeof Role] | (string & {});

export const roleSchema: EnumSchema<Role> = s.enumOf<Role>(Role);
