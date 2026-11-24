import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state3Schema, type State3 } from "./state3.js";

/** Configuration for the Analytics add-on. */
export type GoogleCloudApigeeV1AnalyticsConfig = {
  /** Output only. The latest update time. */
  updateTime?: string;
  /** Output only. The state of the Analytics add-on. */
  state?: State3;
  /**
   * Output only. Time at which the Analytics add-on expires in milliseconds since epoch. If
   * unspecified, the add-on will never expire.
   */
  expireTimeMillis?: string;
  /** Whether the Analytics add-on is enabled. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AnalyticsConfigSchema: Schema<GoogleCloudApigeeV1AnalyticsConfig> =
  s.object<GoogleCloudApigeeV1AnalyticsConfig>(
    {
      updateTime: s.optional(s.string()),
      state: s.optional(s.lazy(() => state3Schema)),
      expireTimeMillis: s.optional(s.string()),
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
