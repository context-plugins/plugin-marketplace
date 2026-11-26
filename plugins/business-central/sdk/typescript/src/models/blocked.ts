import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the customer is blocked */
export const Blocked = {
  Ship: "Ship",
  Invoice: "Invoice",
  All: "All",
} as const;
export type Blocked = (typeof Blocked)[keyof typeof Blocked] | (string & {});

export const blockedSchema: EnumSchema<Blocked> = s.enumOf<Blocked>(Blocked);
