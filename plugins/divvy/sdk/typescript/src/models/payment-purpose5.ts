import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nameValueSchema, type NameValue } from "./name-value.js";
import { paymentPurposeTypeSchema, type PaymentPurposeType } from "./payment-purpose-type.js";

export type PaymentPurpose5 = {
  /**
   * Set as `true` if payment purpose information is required. If `required` is set as `false`,
   * `paymentPurpose` information is not required in your create vendor or payment API request.
   */
  required?: boolean;
  type?: PaymentPurposeType;
  /** Available payment purpose codes */
  codes?: NameValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentPurpose5Schema: Schema<PaymentPurpose5> = s.object<PaymentPurpose5>(
  {
    required: s.optional(s.boolean()),
    type: s.optional(s.lazy(() => paymentPurposeTypeSchema)),
    codes: s.optional(s.array(s.lazy(() => nameValueSchema))),
  },
  { additionalProperties: s.json() },
);
