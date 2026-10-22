import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchStatus2Schema, type BatchStatus2 } from "./batch-status2.js";
import { autoCallRateBaselineSchema, type AutoCallRateBaseline } from "./unions/auto-call-rate-baseline.js";
import { callRateSchema, type CallRate } from "./unions/call-rate.js";
import { deletedAtSchema, type DeletedAt } from "./unions/deleted-at.js";
import { deletedReasonSchema, type DeletedReason } from "./unions/deleted-reason.js";
import { detailedStatusCountsSchema, type DetailedStatusCounts } from "./unions/detailed-status-counts.js";
import { dispatchIdSchema, type DispatchId } from "./unions/dispatch-id.js";
import { errorMessageSchema, type ErrorMessage } from "./unions/error-message.js";
import { expiresOnSchema, type ExpiresOn } from "./unions/expires-on.js";
import { lastUpdatedAtSchema, type LastUpdatedAt } from "./unions/last-updated-at.js";
import { pausedSchema, type Paused } from "./unions/paused.js";
import { statusCountsSchema, type StatusCounts } from "./unions/status-counts.js";
import { uploadFilenameSchema, type UploadFilename } from "./unions/upload-filename.js";

export type BatchDetails = {
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
  /** Status of batch */
  status?: BatchStatus2;
  /**
   * Read-only. The auto-paced rate first computed for this batch, set on its first dialing cycle.
   * Subsequent cycles hold the rate within +/- 20% of it. Null until the batch has dialed, or when
   * auto_call_rate is off.
   */
  autoCallRateBaseline?: AutoCallRateBaseline;
  /** Name of file used to create batch */
  uploadFilename?: UploadFilename;
  /** A unique identifier for dipatched job */
  dispatchId?: DispatchId;
  /** Timestamp of batch creation */
  createdAt?: Date;
  /** Timestamp of batch deletion */
  deletedAt?: DeletedAt;
  /** Reason for batch deletion */
  deletedReason?: DeletedReason;
  /** Timestamp of last change to batch */
  lastUpdatedAt?: LastUpdatedAt;
  /** Email of user who last updated campaign */
  lastUpdatedBy: string;
  /** Error message if batch upload failed */
  errorMessage?: ErrorMessage;
  /** Counts of requests by status */
  statusCounts?: StatusCounts;
  /** Per request_status: total count and optional counts by channel_manager_status */
  detailedStatusCounts?: DetailedStatusCounts;
};

export const batchDetailsSchema: Schema<BatchDetails> = s.object<BatchDetails>({
  batchId: s.string(),
  campaignId: s.int(),
  expiresOn: s.optional(s.lazy(() => expiresOnSchema)),
  paused: s.optional(s.lazy(() => pausedSchema)),
  callRate: s.optional(s.lazy(() => callRateSchema)),
  autoCallRate: s.defaulted(s.boolean(), false),
  status: s.optional(s.lazy(() => batchStatus2Schema)),
  autoCallRateBaseline: s.optional(s.lazy(() => autoCallRateBaselineSchema)),
  uploadFilename: s.optional(s.lazy(() => uploadFilenameSchema)),
  dispatchId: s.optional(s.lazy(() => dispatchIdSchema)),
  createdAt: s.optional(s.dateTime()),
  deletedAt: s.optional(s.lazy(() => deletedAtSchema)),
  deletedReason: s.optional(s.lazy(() => deletedReasonSchema)),
  lastUpdatedAt: s.optional(s.lazy(() => lastUpdatedAtSchema)),
  lastUpdatedBy: s.string(),
  errorMessage: s.optional(s.lazy(() => errorMessageSchema)),
  statusCounts: s.optional(s.lazy(() => statusCountsSchema)),
  detailedStatusCounts: s.optional(s.lazy(() => detailedStatusCountsSchema)),
  _keysMap: {
    batchId: "batch_id",
    campaignId: "campaign_id",
    expiresOn: "expires_on",
    callRate: "call_rate",
    autoCallRate: "auto_call_rate",
    autoCallRateBaseline: "auto_call_rate_baseline",
    uploadFilename: "upload_filename",
    dispatchId: "dispatch_id",
    createdAt: "created_at",
    deletedAt: "deleted_at",
    deletedReason: "deleted_reason",
    lastUpdatedAt: "last_updated_at",
    lastUpdatedBy: "last_updated_by",
    errorMessage: "error_message",
    statusCounts: "status_counts",
    detailedStatusCounts: "detailed_status_counts",
  },
});
