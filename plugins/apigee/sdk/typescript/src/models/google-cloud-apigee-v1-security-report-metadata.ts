import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metadata for the security report. */
export type GoogleCloudApigeeV1SecurityReportMetadata = {
  /** MIME type / Output format. */
  mimeType?: string;
  /** Query GroupBy time unit. Example: "seconds", "minute", "hour" */
  timeUnit?: string;
  /** Start timestamp of the query range. */
  startTimestamp?: string;
  /** Dimensions of the SecurityReport. */
  dimensions?: string[];
  /** Metrics of the SecurityReport. Example: ["name:bot_count,func:sum,alias:sum_bot_count"] */
  metrics?: string[];
  /** End timestamp of the query range. */
  endTimestamp?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityReportMetadataSchema: Schema<GoogleCloudApigeeV1SecurityReportMetadata> =
  s.object<GoogleCloudApigeeV1SecurityReportMetadata>(
    {
      mimeType: s.optional(s.string()),
      timeUnit: s.optional(s.string()),
      startTimestamp: s.optional(s.string()),
      dimensions: s.optional(s.array(s.string())),
      metrics: s.optional(s.array(s.string())),
      endTimestamp: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
