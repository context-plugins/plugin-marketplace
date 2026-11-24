import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { configSchema, type Config } from "./config.js";

export type ContentPublishingLimitResponse = {
  config?: Config;
  quotaUsage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentPublishingLimitResponseSchema: Schema<ContentPublishingLimitResponse> =
  s.object<ContentPublishingLimitResponse>(
    {
      config: s.optional(s.lazy(() => configSchema)),
      quotaUsage: s.optional(s.int()),
      _keysMap: {
        quotaUsage: "quota_usage",
      },
    },
    { additionalProperties: s.json() },
  );
