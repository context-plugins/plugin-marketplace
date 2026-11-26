import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { disbursementTypeSchema, type DisbursementType } from "./disbursement-type.js";
import { virtualCardStatusSchema, type VirtualCardStatus } from "./virtual-card-status.js";

/** Vendor Direct (VCARD) information. */
export type VirtualCardBillV3VendorsApi = {
  status?: VirtualCardStatus;
  /** Virtual card remittance email address set for the vendor */
  remitEmail?: string;
  /** Virtual card enrollment date */
  enrollDate?: Date;
  /** Virtual card declined date */
  declineDate?: Date;
  alternatePayByType?: DisbursementType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const virtualCardBillV3VendorsApiSchema: Schema<VirtualCardBillV3VendorsApi> =
  s.object<VirtualCardBillV3VendorsApi>(
    {
      status: s.optional(s.lazy(() => virtualCardStatusSchema)),
      remitEmail: s.optional(s.string()),
      enrollDate: s.optional(s.dateTime()),
      declineDate: s.optional(s.dateTime()),
      alternatePayByType: s.optional(s.lazy(() => disbursementTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
