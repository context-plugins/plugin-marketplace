import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloudWatchMetricsDimension = {
  /** The name of the CloudWatch dimension. */
  name?: string;
  /** The value of the CloudWatch dimension. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudWatchMetricsDimensionSchema: Schema<CloudWatchMetricsDimension> =
  s.object<CloudWatchMetricsDimension>(
    {
      name: s.optional(s.string()),
      value: s.optional(s.string()),
      _keysMap: {
        name: "Name",
        value: "Value",
      },
    },
    { additionalProperties: s.json() },
  );
