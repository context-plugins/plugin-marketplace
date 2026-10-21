import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The payment network used to process the transfer */
export const Destination3 = {
  RealTimePayments: "real-time-payments",
  FedNow: "fed-now",
} as const;
export type Destination3 = (typeof Destination3)[keyof typeof Destination3] | (string & {});

export const destination3Schema: EnumSchema<Destination3> = s.enumOf<Destination3>(Destination3);
