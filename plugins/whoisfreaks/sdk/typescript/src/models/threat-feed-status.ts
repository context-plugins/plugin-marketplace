import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateRangeStatusSchema, type DateRangeStatus } from "./date-range-status.js";

export type ThreatFeedStatus = {
  phishing?: DateRangeStatus;
  malware?: DateRangeStatus;
  spam?: DateRangeStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const threatFeedStatusSchema: Schema<ThreatFeedStatus> = s.object<ThreatFeedStatus>(
  {
    phishing: s.optional(s.lazy(() => dateRangeStatusSchema)),
    malware: s.optional(s.lazy(() => dateRangeStatusSchema)),
    spam: s.optional(s.lazy(() => dateRangeStatusSchema)),
  },
  { additionalProperties: s.json() },
);
