import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentMethod = {
  id?: string;
  code?: string;
  displayName?: string;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethodProperties: s.Shape<PaymentMethod> = {
  id: s.optional(s.string()),
  code: s.optional(s.string()),
  displayName: s.optional(s.string()),
  lastModifiedDateTime: s.optional(s.dateTime()),
};

export const paymentMethodInternalSchema: Schema<PaymentMethod> = s.object<PaymentMethod>(
  paymentMethodProperties,
  { additionalProperties: s.json() },
);

export const paymentMethodSchema: Schema<PaymentMethod> = s.lazySchema(() =>
  s.object<PaymentMethod>(
    {
      ...paymentMethodProperties,
      code: s.optional(s.string().check(s.maxLength(10))),
      displayName: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
