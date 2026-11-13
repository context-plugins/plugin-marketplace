import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookBatchStatusSchema, type WebhookBatchStatus } from "./webhook-batch-status.js";

export type WebhookUsage = {
  numWaiting: number;
  status: string;
  updatedTime?: number | null;
  lastSuccessTime?: number | null;
  lastFailureTime?: number | null;
  lastErrorMessage?: string | null;
  lastHttpStatus?: number | null;
  lastEventBatch?: WebhookBatchStatus | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookUsageSchema: Schema<WebhookUsage> = s.object<WebhookUsage>(
  {
    numWaiting: s.int(),
    status: s.string(),
    updatedTime: s.optionalNullable(s.float64()),
    lastSuccessTime: s.optionalNullable(s.float64()),
    lastFailureTime: s.optionalNullable(s.float64()),
    lastErrorMessage: s.optionalNullable(s.string()),
    lastHttpStatus: s.optionalNullable(s.float64()),
    lastEventBatch: s.optionalNullable(s.lazy(() => webhookBatchStatusSchema)),
  },
  { additionalProperties: s.json() },
);
