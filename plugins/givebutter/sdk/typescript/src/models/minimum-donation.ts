import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `decimal` value. */
export type MinimumDonation = {
  /** @default "minimum_donation" */
  name?: "minimum_donation";
  value?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const minimumDonationSchema: Schema<MinimumDonation> = s.object<MinimumDonation>(
  {
    name: s.defaulted(s.literal("minimum_donation"), "minimum_donation"),
    value: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
