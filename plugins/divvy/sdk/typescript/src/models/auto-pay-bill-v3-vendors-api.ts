import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AutoPayBillV3VendorsApi = {
  /** Set as `true` if the vendor auto-pay is enabled */
  enabled?: boolean;
  /**
   * BILL-generated ID of the organization bank account used to set up vendor auto-pay. The value
   * begins with `bac`.
   */
  bankAccountId?: string;
  /**
   * BILL-generated ID of the user that set up vendor auto-pay. The value begins with `006`.
   *
   * You can retrieve your user ID when you sign in with `/v3/login`.
   */
  createdBy?: string;
  /** Maximum bill amount for which vendor auto-pay is enabled */
  maxAmount?: number;
  /**
   * Number of days before the bill payment due date.
   *
   * For example, if `dueBeforeDueDate` is `3`, BILL submits the vendor payment 3 days before the
   * bill payment due date.
   */
  daysBeforeDueDate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const autoPayBillV3VendorsApiProperties: s.Shape<AutoPayBillV3VendorsApi> = {
  enabled: s.optional(s.boolean()),
  bankAccountId: s.optional(s.string()),
  createdBy: s.optional(s.string()),
  maxAmount: s.optional(s.float64()),
  daysBeforeDueDate: s.optional(s.int()),
};

export const autoPayBillV3VendorsApiInternalSchema: Schema<AutoPayBillV3VendorsApi> =
  s.object<AutoPayBillV3VendorsApi>(autoPayBillV3VendorsApiProperties, { additionalProperties: s.json() });

export const autoPayBillV3VendorsApiSchema: Schema<AutoPayBillV3VendorsApi> = s.lazySchema(() =>
  s.object<AutoPayBillV3VendorsApi>(
    {
      ...autoPayBillV3VendorsApiProperties,
      daysBeforeDueDate: s.optional(s.int().check(s.gte(0), s.lte(60))),
    },
    { additionalProperties: s.json() },
  ),
);
