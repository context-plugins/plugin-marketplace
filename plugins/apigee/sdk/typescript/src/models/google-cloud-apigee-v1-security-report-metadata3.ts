import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Contains information like metrics, dimenstions etc of the Security Report. */
export type GoogleCloudApigeeV1SecurityReportMetadata3 = {
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

export const googleCloudApigeeV1SecurityReportMetadata3Schema: Schema<GoogleCloudApigeeV1SecurityReportMetadata3> =
  s.object<GoogleCloudApigeeV1SecurityReportMetadata3>(
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
