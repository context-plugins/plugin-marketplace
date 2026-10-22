import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { autoCallRateSchema, type AutoCallRate } from "./unions/auto-call-rate.js";
import { callRate3Schema, type CallRate3 } from "./unions/call-rate3.js";
import { expiresOnSchema, type ExpiresOn } from "./unions/expires-on.js";
import { pausedSchema, type Paused } from "./unions/paused.js";

export type CommunicationBatchUpdate = {
  /** Whether the batch is on HOLD. When on HOLD, no outreach will be made. */
  paused?: Paused;
  /** Timestamp of batch expiration */
  expiresOn?: ExpiresOn;
  /**
   * Target number of outreach attempts per hour for this batch. Omitted leaves the current value
   * unchanged; a batch that has never set one inherits the campaign's hourly_rate.
   */
  callRate?: CallRate3;
  /**
   * Pace this batch automatically to finish before expires_on. Omitted leaves the current setting
   * unchanged. Enabling it requires the batch to have an expires_on, either already set or supplied
   * in the same update.
   */
  autoCallRate?: AutoCallRate;
};

export const communicationBatchUpdateSchema: Schema<CommunicationBatchUpdate> =
  s.object<CommunicationBatchUpdate>({
    paused: s.optional(s.lazy(() => pausedSchema)),
    expiresOn: s.optional(s.lazy(() => expiresOnSchema)),
    callRate: s.optional(s.lazy(() => callRate3Schema)),
    autoCallRate: s.optional(s.lazy(() => autoCallRateSchema)),
    _keysMap: {
      expiresOn: "expires_on",
      callRate: "call_rate",
      autoCallRate: "auto_call_rate",
    },
  });
