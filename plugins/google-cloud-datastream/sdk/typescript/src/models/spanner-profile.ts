import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Profile for connecting to a Spanner source. */
export type SpannerProfile = {
  /**
   * Optional. The Spanner endpoint to connect to. Defaults to the global endpoint
   * (https://spanner.googleapis.com). Must be in the format:
   * https://spanner.{region}.rep.googleapis.com.
   */
  host?: string;
  /**
   * Required. Immutable. Cloud Spanner database resource. This field is immutable. Must be in the
   * format: projects/{project}/instances/{instance}/databases/{database_id}.
   */
  database?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spannerProfileSchema: Schema<SpannerProfile> = s.object<SpannerProfile>(
  {
    host: s.optional(s.string()),
    database: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
