import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { logLevel15Schema, type LogLevel15 } from "./log-level15.js";

export type ContentType = {
  /** Microsoft 365 Management Activity API Content Type */
  contentType?: string;
  /** If interval type is minutes the value entered must evenly divisible by 60 or save will fail */
  description?: string;
  /** Interval */
  interval?: number;
  /** Collector runtime Log Level */
  logLevel?: LogLevel15;
  /** Enabled */
  enabled?: boolean;
};

export const contentTypeSchema: Schema<ContentType> = s.object<ContentType>({
  contentType: s.optional(s.string()),
  description: s.optional(s.string()),
  interval: s.optional(s.float64()),
  logLevel: s.optional(s.lazy(() => logLevel15Schema)),
  enabled: s.optional(s.boolean()),
});
