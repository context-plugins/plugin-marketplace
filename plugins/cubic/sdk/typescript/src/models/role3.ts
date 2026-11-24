import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Desired role. Send with expectedRole. */
export const Role3 = {
  Member: "member",
  Admin: "admin",
  Viewer: "viewer",
} as const;
export type Role3 = (typeof Role3)[keyof typeof Role3] | (string & {});

export const role3Schema: EnumSchema<Role3> = s.enumOf<Role3>(Role3);
