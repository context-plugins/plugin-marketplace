import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionMetadataSchema, type ActionMetadata } from "./action-metadata.js";
import { changedTablesByIdSchema, type ChangedTablesById } from "./changed-tables-by-id.js";

/** A single webhook payload representing a batch of changes. */
export type WebhookPayload = {
  /** The time when the payload was generated. */
  timestamp?: Date;
  /** The transaction number for this batch of changes. */
  baseTransactionNumber?: number;
  /** The format version of the payload. */
  payloadFormat?: string;
  /** Metadata about the action that triggered the webhook. */
  actionMetadata?: ActionMetadata;
  /** A mapping of table IDs to their changes. */
  changedTablesById?: Record<string, ChangedTablesById>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookPayloadSchema: Schema<WebhookPayload> = s.object<WebhookPayload>(
  {
    timestamp: s.optional(s.dateTime()),
    baseTransactionNumber: s.optional(s.int()),
    payloadFormat: s.optional(s.string()),
    actionMetadata: s.optional(s.lazy(() => actionMetadataSchema)),
    changedTablesById: s.optional(
      s.record(
        s.string(),
        s.lazy(() => changedTablesByIdSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
