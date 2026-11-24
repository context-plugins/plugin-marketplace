import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Required. The method by which Key Events will be counted across multiple events within a session.
 */
export const CountingMethodGoogleAnalyticsPropertiesApi = {
  CountingMethodUnspecified: "COUNTING_METHOD_UNSPECIFIED",
  OncePerEvent: "ONCE_PER_EVENT",
  OncePerSession: "ONCE_PER_SESSION",
} as const;
export type CountingMethodGoogleAnalyticsPropertiesApi =
  | (typeof CountingMethodGoogleAnalyticsPropertiesApi)[keyof typeof CountingMethodGoogleAnalyticsPropertiesApi]
  | (string & {});

export const countingMethodGoogleAnalyticsPropertiesApiSchema: EnumSchema<CountingMethodGoogleAnalyticsPropertiesApi> =
  s.enumOf<CountingMethodGoogleAnalyticsPropertiesApi>(CountingMethodGoogleAnalyticsPropertiesApi);
