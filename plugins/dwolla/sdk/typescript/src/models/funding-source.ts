import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankUsageTypeSchema, type BankUsageType } from "./bank-usage-type.js";
import { cardDetailsSchema, type CardDetails } from "./card-details.js";
import { channelSchema, type Channel } from "./channel.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type FundingSource = {
  links?: Record<string, HalLink>;
  id?: string;
  status?: string;
  type?: string;
  bankAccountType?: string;
  name?: string;
  created?: Date;
  removed?: boolean;
  /** Payment processing channels supported by this funding source */
  channels?: Channel[];
  bankName?: string;
  fingerprint?: string;
  /**
   * The usage type of the bank account. Indicates if this is a settlement account for card network
   * processors.
   */
  bankUsageType?: BankUsageType;
  /** Card-specific details. Only present when type is 'card'. */
  cardDetails?: CardDetails;
};

export const fundingSourceSchema: Schema<FundingSource> = s.object<FundingSource>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  id: s.optional(s.string()),
  status: s.optional(s.string()),
  type: s.optional(s.string()),
  bankAccountType: s.optional(s.string()),
  name: s.optional(s.string()),
  created: s.optional(s.dateTime()),
  removed: s.optional(s.boolean()),
  channels: s.optional(s.array(s.lazy(() => channelSchema))),
  bankName: s.optional(s.string()),
  fingerprint: s.optional(s.string()),
  bankUsageType: s.optional(s.lazy(() => bankUsageTypeSchema)),
  cardDetails: s.optional(s.lazy(() => cardDetailsSchema)),
  _keysMap: {
    links: "_links",
  },
});
