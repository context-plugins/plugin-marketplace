import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** General Leadspace JSON error envelope */
export type ErrorErrorLeadspaceApiV4EnrichmentApi = {
  /** Error description */
  error?: string;
  /** Leadspace tracking identifier for further inspection */
  trackingId?: string;
  /** Timestamp assigned when the request reached Leadspace servers */
  requestTimestamp?: string;
  details?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorErrorLeadspaceApiV4EnrichmentApiSchema: Schema<ErrorErrorLeadspaceApiV4EnrichmentApi> =
  s.object<ErrorErrorLeadspaceApiV4EnrichmentApi>(
    {
      error: s.optional(s.string()),
      trackingId: s.optional(s.string()),
      requestTimestamp: s.optional(s.string()),
      details: s.optional(s.string()),
      _keysMap: {
        trackingId: "tracking_id",
        requestTimestamp: "request_timestamp",
      },
    },
    { additionalProperties: s.json() },
  );
