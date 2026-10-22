import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achDetailsSchema, type AchDetails } from "./ach-details.js";
import { amountSchema, type Amount } from "./amount.js";
import { clearingSchema, type Clearing } from "./clearing.js";
import { fedNowDetailsSchema, type FedNowDetails } from "./fed-now-details.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";
import { metadataSchema, type Metadata } from "./metadata.js";
import { processingChannelSchema, type ProcessingChannel } from "./processing-channel.js";
import { rtpDetailsSchema, type RtpDetails } from "./rtp-details.js";

export type Transfer = {
  links?: Record<string, HalLink>;
  id?: string;
  status?: string;
  amount?: Amount;
  created?: Date;
  clearing?: Clearing;
  metadata?: Metadata;
  /** ACH-specific details for the transfer. Present when transfer was processed via ACH network. */
  achDetails?: AchDetails;
  /**
   * Real-Time Payments (RTP) network specific details. Present when transfer was processed via RTP
   * network.
   */
  rtpDetails?: RtpDetails;
  /**
   * FedNow Service network specific details. Present when transfer was processed via FedNow
   * network.
   */
  fedNowDetails?: FedNowDetails;
  correlationId?: string;
  processingChannel?: ProcessingChannel;
};

export const transferSchema: Schema<Transfer> = s.object<Transfer>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  id: s.optional(s.string()),
  status: s.optional(s.string()),
  amount: s.optional(s.lazy(() => amountSchema)),
  created: s.optional(s.dateTime()),
  clearing: s.optional(s.lazy(() => clearingSchema)),
  metadata: s.optional(s.lazy(() => metadataSchema)),
  achDetails: s.optional(s.lazy(() => achDetailsSchema)),
  rtpDetails: s.optional(s.lazy(() => rtpDetailsSchema)),
  fedNowDetails: s.optional(s.lazy(() => fedNowDetailsSchema)),
  correlationId: s.optional(s.string()),
  processingChannel: s.optional(s.lazy(() => processingChannelSchema)),
  _keysMap: {
    links: "_links",
  },
});
