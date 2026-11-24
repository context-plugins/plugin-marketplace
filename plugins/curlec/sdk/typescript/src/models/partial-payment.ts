import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Rename partial payment labels (for localisation). */
export type PartialPayment = {
  minAmountLabel?: string;
  partialAmountLabel?: string;
  partialAmountDescription?: string;
  fullAmountLabel?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const partialPaymentSchema: Schema<PartialPayment> = s.object<PartialPayment>(
  {
    minAmountLabel: s.optional(s.string()),
    partialAmountLabel: s.optional(s.string()),
    partialAmountDescription: s.optional(s.string()),
    fullAmountLabel: s.optional(s.string()),
    _keysMap: {
      minAmountLabel: "min_amount_label",
      partialAmountLabel: "partial_amount_label",
      partialAmountDescription: "partial_amount_description",
      fullAmountLabel: "full_amount_label",
    },
  },
  { additionalProperties: s.json() },
);
