import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ChartgeneratorRequest = {
  /** Chart type */
  type?: string;
  /** Array of labels for the x-axis or chart segments */
  labels: string;
  /** Array of datasets with 'name' and 'values' */
  datasets: string;
  /** Optional title displayed on the chart */
  title?: string;
  /** Image width in pixels */
  width?: number;
  /** Image height in pixels */
  height?: number;
  /** Output format */
  format?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ChartgeneratorRequestSchema: Schema<V1ChartgeneratorRequest> =
  s.object<V1ChartgeneratorRequest>(
    {
      type: s.optional(s.string()),
      labels: s.string(),
      datasets: s.string(),
      title: s.optional(s.string()),
      width: s.optional(s.int()),
      height: s.optional(s.int()),
      format: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
