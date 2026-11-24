import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Vendor additional information. */
export type AdditionalInfo = {
  taxId?: string;
  taxIdType?: string;
  track1099?: boolean;
  leadTimeInDays?: number;
  combinePayments?: boolean;
  companyName?: string;
  paymentTermId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const additionalInfoSchema: Schema<AdditionalInfo> = s.object<AdditionalInfo>(
  {
    taxId: s.optional(s.string()),
    taxIdType: s.optional(s.string()),
    track1099: s.optional(s.boolean()),
    leadTimeInDays: s.optional(s.int()),
    combinePayments: s.optional(s.boolean()),
    companyName: s.optional(s.string()),
    paymentTermId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
