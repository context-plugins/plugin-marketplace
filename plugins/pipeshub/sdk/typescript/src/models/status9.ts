import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status9 = {
  Active: "active",
  Suspended: "suspended",
  Revoked: "revoked",
} as const;
export type Status9 = (typeof Status9)[keyof typeof Status9] | (string & {});

export const status9Schema: EnumSchema<Status9> = s.enumOf<Status9>(Status9);
