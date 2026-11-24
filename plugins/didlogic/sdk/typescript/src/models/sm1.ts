import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Sm1 = {
  /**
   * Source number from numbers_index, purchases_index; it must be one of your numbers with SMS
   * enabled (in numbers_index its `services` include `sms`) or one of your approved sender IDs
   */
  source: string;
  /** Destination phone number (must be a valid international number) */
  destination: string;
  /** SMS text content (160 chars per segment) */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sm1Schema: Schema<Sm1> = s.object<Sm1>(
  {
    source: s.string(),
    destination: s.string(),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
