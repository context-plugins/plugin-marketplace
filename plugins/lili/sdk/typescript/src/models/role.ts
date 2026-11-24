import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The UBO role in the account */
export const Role = {
  Partner: "PARTNER",
  PartnerFullAccess: "PARTNER_FULL_ACCESS",
} as const;
export type Role = (typeof Role)[keyof typeof Role] | (string & {});

export const roleSchema: EnumSchema<Role> = s.enumOf<Role>(Role);
