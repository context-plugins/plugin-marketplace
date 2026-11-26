import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taxIdTypeRequestSchema, type TaxIdTypeRequest } from "./tax-id-type-request.js";

/** The type Additional info. */
export type AdditionalInfoRequest = {
  /** Vendor tax ID. This value is required by the IRS for tax purposes. */
  taxId?: string;
  taxIdType?: TaxIdTypeRequest;
  /** Set as `true` if the vendor is eligible to receive an IRS form 1099 from the payer */
  track1099?: boolean;
  /** Vendor payment lead time in days */
  leadTimeInDays?: number;
  /**
   * Set as `true` to combine a bulk payment made to the vendor with `POST /v3/payments/bulk`. The
   * default value is `true`.
   */
  combinePayments?: boolean;
  /**
   * BILL-generated ID of the payment term. Use payment terms to set the number of days that
   * customers have to pay a vendor bill.
   */
  paymentTermId?: string;
  /** Vendor business name. This value is required by the IRS for tax purposes. */
  companyName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const additionalInfoRequestSchema: Schema<AdditionalInfoRequest> = s.object<AdditionalInfoRequest>(
  {
    taxId: s.optional(s.string()),
    taxIdType: s.optional(s.lazy(() => taxIdTypeRequestSchema)),
    track1099: s.optional(s.boolean()),
    leadTimeInDays: s.optional(s.int()),
    combinePayments: s.optional(s.boolean()),
    paymentTermId: s.optional(s.string()),
    companyName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
