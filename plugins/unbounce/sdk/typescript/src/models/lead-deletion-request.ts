import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LeadDeletionRequest = {
  id?: string;
  state?: string;
  requestedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const leadDeletionRequestSchema: Schema<LeadDeletionRequest> = s.object<LeadDeletionRequest>(
  {
    id: s.optional(s.string()),
    state: s.optional(s.string()),
    requestedAt: s.optional(s.dateTime()),
    _keysMap: {
      requestedAt: "requested_at",
    },
  },
  { additionalProperties: s.json() },
);
