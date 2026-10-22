import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callRateSchema, type CallRate } from "./unions/call-rate.js";
import { expiresOnSchema, type ExpiresOn } from "./unions/expires-on.js";
import { pausedSchema, type Paused } from "./unions/paused.js";

export type CommunicationBatchInput = {
  /** Unique ID for conversation batch */
  batchId: string;
  /** Unique ID for campaign */
  campaignId: number;
  /** Timestamp of batch expiration */
  expiresOn?: ExpiresOn;
  /** Whether the batch is on HOLD. When on HOLD, no outreach will be made. */
  paused?: Paused;
  /**
   * Target number of outreach attempts per hour for this batch. When omitted, the batch inherits
   * the campaign's hourly_rate.
   */
  callRate?: CallRate;
  /**
   * Pace this batch automatically to finish before expires_on, counting only the campaign's valid
   * hours (daily_start_time..daily_end_time on active_days). The derived rate takes precedence over
   * call_rate and over the campaign hourly_rate. Requires expires_on.
   *
   * @default false
   */
  autoCallRate?: boolean;
};

export const communicationBatchInputSchema: Schema<CommunicationBatchInput> =
  s.object<CommunicationBatchInput>({
    batchId: s.string(),
    campaignId: s.int(),
    expiresOn: s.optional(s.lazy(() => expiresOnSchema)),
    paused: s.optional(s.lazy(() => pausedSchema)),
    callRate: s.optional(s.lazy(() => callRateSchema)),
    autoCallRate: s.defaulted(s.boolean(), false),
    _keysMap: {
      batchId: "batch_id",
      campaignId: "campaign_id",
      expiresOn: "expires_on",
      callRate: "call_rate",
      autoCallRate: "auto_call_rate",
    },
  });
