import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Defaults to member. */
export const Role = {
  Owner: "owner",
  Admin: "admin",
  Member: "member",
} as const;
export type Role = (typeof Role)[keyof typeof Role] | (string & {});

export const roleSchema: EnumSchema<Role> = s.enumOf<Role>(Role);
