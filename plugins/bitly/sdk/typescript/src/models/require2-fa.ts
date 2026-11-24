import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Two-factor authentication requirement for this organization. Possible values: "none", "sms".
 * Omitted when no auth requirements are configured.
 */
export const Require2Fa = {
  None: "none",
  Sms: "sms",
} as const;
export type Require2Fa = (typeof Require2Fa)[keyof typeof Require2Fa] | (string & {});

export const require2FaSchema: EnumSchema<Require2Fa> = s.enumOf<Require2Fa>(Require2Fa);
