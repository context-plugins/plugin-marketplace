import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookPayloadSchema, type WebhookPayload } from "./webhook-payload.js";

/** A paginated list of webhook payloads. */
export type WebhookPayloadList = {
  payloads: WebhookPayload[];
  /** The cursor for fetching the next page of payloads. */
  cursor?: number;
  /** Whether there may be more payloads to fetch. */
  mightHaveMore?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookPayloadListSchema: Schema<WebhookPayloadList> = s.object<WebhookPayloadList>(
  {
    payloads: s.array(s.lazy(() => webhookPayloadSchema)),
    cursor: s.optional(s.int()),
    mightHaveMore: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
