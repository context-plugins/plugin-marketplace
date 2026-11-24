import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetApiV1ProxiesUserRequestsBandwidthResponse = {
  username?: string;
  totalBandwidthUsage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getApiV1ProxiesUserRequestsBandwidthResponseSchema: Schema<GetApiV1ProxiesUserRequestsBandwidthResponse> =
  s.object<GetApiV1ProxiesUserRequestsBandwidthResponse>(
    {
      username: s.optional(s.string()),
      totalBandwidthUsage: s.optional(s.float64()),
      _keysMap: {
        totalBandwidthUsage: "total_bandwidth_usage",
      },
    },
    { additionalProperties: s.json() },
  );
