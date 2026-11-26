import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentTerm = {
  id?: string;
  code?: string;
  displayName?: string;
  /** The date formula for due date calculation */
  dueDateCalculation?: string;
  /** The date formula for discount date calculation */
  discountDateCalculation?: string;
  discountPercent?: number;
  calculateDiscountOnCreditMemos?: boolean;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentTermProperties: s.Shape<PaymentTerm> = {
  id: s.optional(s.string()),
  code: s.optional(s.string()),
  displayName: s.optional(s.string()),
  dueDateCalculation: s.optional(s.string()),
  discountDateCalculation: s.optional(s.string()),
  discountPercent: s.optional(s.float64()),
  calculateDiscountOnCreditMemos: s.optional(s.boolean()),
  lastModifiedDateTime: s.optional(s.dateTime()),
};

export const paymentTermInternalSchema: Schema<PaymentTerm> = s.object<PaymentTerm>(paymentTermProperties, {
  additionalProperties: s.json(),
});

export const paymentTermSchema: Schema<PaymentTerm> = s.lazySchema(() =>
  s.object<PaymentTerm>(
    {
      ...paymentTermProperties,
      code: s.optional(s.string().check(s.maxLength(10))),
      displayName: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
