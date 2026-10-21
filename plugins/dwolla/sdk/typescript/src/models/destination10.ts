import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Destination10 = {
  RealTimePayments: "real-time-payments",
  Instant: "instant",
} as const;
export type Destination10 = (typeof Destination10)[keyof typeof Destination10] | (string & {});

export const destination10Schema: EnumSchema<Destination10> = s.enumOf<Destination10>(Destination10);
