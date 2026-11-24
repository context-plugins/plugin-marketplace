import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { PaymentProcessor, paymentProcessorSchema } from "./payment-processor.js";

export type Sale = {
  /**
   * The amount of the sale in the smallest unit of `currency` — cents for two-decimal currencies,
   * the full integer for zero-decimal ones (e.g. `1437` JPY), thousandths for three-decimal ones
   * (e.g. `1437` KWD fils).
   */
  amount: number;
  /**
   * The invoice ID of the sale. Can be used as a idempotency key – only one sale event can be
   * recorded for a given invoice ID.
   */
  invoiceId: string | null;
  /** The payment processor via which the sale was made. @default PaymentProcessor.Custom */
  paymentProcessor?: PaymentProcessor;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const saleProperties: s.Shape<Sale> = {
  amount: s.int(),
  invoiceId: s.nullable(s.string()),
  paymentProcessor: s.defaulted(paymentProcessorSchema, PaymentProcessor.Custom),
};

export const saleInternalSchema: Schema<Sale> = s.object<Sale>(saleProperties, {
  additionalProperties: s.json(),
});

export const saleSchema: Schema<Sale> = s.lazySchema(() =>
  s.object<Sale>(
    {
      ...saleProperties,
      amount: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
