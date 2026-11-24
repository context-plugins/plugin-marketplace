import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookDelivery = {
  id?: number;
  jobId?: string | null;
  event?: string;
  attempt?: number;
  statusCode?: number | null;
  delivered?: boolean;
  attemptedAt?: Date;
  responsePreview?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookDeliverySchema: Schema<WebhookDelivery> = s.object<WebhookDelivery>(
  {
    id: s.optional(s.int()),
    jobId: s.optionalNullable(s.string()),
    event: s.optional(s.string()),
    attempt: s.optional(s.int()),
    statusCode: s.optionalNullable(s.int()),
    delivered: s.optional(s.boolean()),
    attemptedAt: s.optional(s.dateTime()),
    responsePreview: s.optionalNullable(s.string()),
    _keysMap: {
      jobId: "job_id",
      statusCode: "status_code",
      attemptedAt: "attempted_at",
      responsePreview: "response_preview",
    },
  },
  { additionalProperties: s.json() },
);
