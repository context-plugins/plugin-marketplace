import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code1BillV3VendorsApiSchema, type Code1BillV3VendorsApi } from "./code1-bill-v3-vendors-api.js";

/** Payment purpose request. */
export type PaymentPurposeRequestBillV3VendorsApi = {
  /**
   * Payment purpose text. This can be any user-defined text. If you set `text`, do not set `code`.
   */
  text?: string;
  code?: Code1BillV3VendorsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentPurposeRequestBillV3VendorsApiProperties: s.Shape<PaymentPurposeRequestBillV3VendorsApi> = {
  text: s.optional(s.string()),
  code: s.optional(s.lazy(() => code1BillV3VendorsApiSchema)),
};

export const paymentPurposeRequestBillV3VendorsApiInternalSchema: Schema<PaymentPurposeRequestBillV3VendorsApi> =
  s.object<PaymentPurposeRequestBillV3VendorsApi>(paymentPurposeRequestBillV3VendorsApiProperties, {
    additionalProperties: s.json(),
  });

export const paymentPurposeRequestBillV3VendorsApiSchema: Schema<PaymentPurposeRequestBillV3VendorsApi> =
  s.lazySchema(() =>
    s.object<PaymentPurposeRequestBillV3VendorsApi>(
      {
        ...paymentPurposeRequestBillV3VendorsApiProperties,
        text: s.optional(s.string().check(s.maxLength(250))),
      },
      { additionalProperties: s.json() },
    ),
  );
