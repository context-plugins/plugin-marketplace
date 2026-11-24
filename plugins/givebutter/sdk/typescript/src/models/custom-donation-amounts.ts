import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Custom donation amounts. JSON object; the dashboard groups amounts by frequency (`once`,
 * `monthly`, `quarterly`, `yearly`).
 */
export type CustomDonationAmounts = {
  /** @default "custom_donation_amounts" */
  name?: "custom_donation_amounts";
  value?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customDonationAmountsSchema: Schema<CustomDonationAmounts> = s.object<CustomDonationAmounts>(
  {
    name: s.defaulted(s.literal("custom_donation_amounts"), "custom_donation_amounts"),
    value: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
