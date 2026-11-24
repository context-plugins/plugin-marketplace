import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Evidence = {
  /** Evidence ID. */
  id: string;
  /** Dispute ID. */
  disputeId: string;
  /** Evidence content. */
  content: string;
  /** Who created the evidence. */
  createdBy: string;
  /** Creation timestamp in UTC, ISO 8601 datetime format. */
  createdAt: Date;
  /** Array of attachment IDs. */
  attachmentIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const evidenceSchema: Schema<Evidence> = s.object<Evidence>(
  {
    id: s.string(),
    disputeId: s.string(),
    content: s.string(),
    createdBy: s.string(),
    createdAt: s.dateTime(),
    attachmentIds: s.optional(s.array(s.string())),
    _keysMap: {
      disputeId: "dispute_id",
      createdBy: "created_by",
      createdAt: "created_at",
      attachmentIds: "attachment_ids",
    },
  },
  { additionalProperties: s.json() },
);
