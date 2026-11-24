import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Key dates for the issue, from pre-apply through listing */
export type IpoTimeline1 = {
  /** Date pre-apply opens, in yyyy-MM-dd */
  preApplyStartDate?: string;
  /** Date the issue opens for applications, in yyyy-MM-dd */
  applicationStartDate?: string;
  /** Date the issue closes for applications, in yyyy-MM-dd */
  applicationEndDate?: string;
  /** Date allotment processing starts, in yyyy-MM-dd */
  allotmentStartDate?: string;
  /** Date allotment is finalised, in yyyy-MM-dd */
  allotmentDate?: string;
  /** Date refunds are initiated for unallotted applications, in yyyy-MM-dd */
  refundInitiationDate?: string;
  /** Date the share lists on the exchange, in yyyy-MM-dd */
  listingDate?: string;
  /** Last date the UPI mandate can be approved, in yyyy-MM-dd */
  mandateEndDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoTimeline1Schema: Schema<IpoTimeline1> = s.object<IpoTimeline1>(
  {
    preApplyStartDate: s.optional(s.string()),
    applicationStartDate: s.optional(s.string()),
    applicationEndDate: s.optional(s.string()),
    allotmentStartDate: s.optional(s.string()),
    allotmentDate: s.optional(s.string()),
    refundInitiationDate: s.optional(s.string()),
    listingDate: s.optional(s.string()),
    mandateEndDate: s.optional(s.string()),
    _keysMap: {
      preApplyStartDate: "pre_apply_start_date",
      applicationStartDate: "application_start_date",
      applicationEndDate: "application_end_date",
      allotmentStartDate: "allotment_start_date",
      allotmentDate: "allotment_date",
      refundInitiationDate: "refund_initiation_date",
      listingDate: "listing_date",
      mandateEndDate: "mandate_end_date",
    },
  },
  { additionalProperties: s.json() },
);
