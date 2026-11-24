import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeviceMetric = {
  clicks?: number;
  deviceType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deviceMetricSchema: Schema<DeviceMetric> = s.object<DeviceMetric>(
  {
    clicks: s.optional(s.int()),
    deviceType: s.optional(s.string()),
    _keysMap: {
      deviceType: "device_type",
    },
  },
  { additionalProperties: s.json() },
);
