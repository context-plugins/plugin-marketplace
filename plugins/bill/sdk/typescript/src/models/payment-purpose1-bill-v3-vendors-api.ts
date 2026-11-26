import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code1BillV3VendorsApiSchema, type Code1BillV3VendorsApi } from "./code1-bill-v3-vendors-api.js";

export type PaymentPurpose1BillV3VendorsApi = {
  /**
   * Payment purpose text. This can be any user-defined text. If you set `text`, do not set `code`.
   */
  text?: string;
  code?: Code1BillV3VendorsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentPurpose1BillV3VendorsApiProperties: s.Shape<PaymentPurpose1BillV3VendorsApi> = {
  text: s.optional(s.string()),
  code: s.optional(s.lazy(() => code1BillV3VendorsApiSchema)),
};

export const paymentPurpose1BillV3VendorsApiInternalSchema: Schema<PaymentPurpose1BillV3VendorsApi> =
  s.object<PaymentPurpose1BillV3VendorsApi>(paymentPurpose1BillV3VendorsApiProperties, {
    additionalProperties: s.json(),
  });

export const paymentPurpose1BillV3VendorsApiSchema: Schema<PaymentPurpose1BillV3VendorsApi> = s.lazySchema(
  () =>
    s.object<PaymentPurpose1BillV3VendorsApi>(
      {
        ...paymentPurpose1BillV3VendorsApiProperties,
        text: s.optional(s.string().check(s.maxLength(250))),
      },
      { additionalProperties: s.json() },
    ),
);
