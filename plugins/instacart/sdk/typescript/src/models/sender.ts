import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Who sent the message. */
export const Sender = {
  Customer: "customer",
  Shopper: "shopper",
} as const;
export type Sender = (typeof Sender)[keyof typeof Sender] | (string & {});

export const senderSchema: EnumSchema<Sender> = s.enumOf<Sender>(Sender);
