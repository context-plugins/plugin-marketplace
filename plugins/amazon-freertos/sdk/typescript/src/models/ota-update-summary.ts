import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Summary of an OTA update. */
export type OtaUpdateSummary = {
  otaUpdateId?: string;
  otaUpdateArn?: string;
  creationDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const otaUpdateSummarySchema: Schema<OtaUpdateSummary> = s.object<OtaUpdateSummary>(
  {
    otaUpdateId: s.optional(s.string()),
    otaUpdateArn: s.optional(s.string()),
    creationDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
