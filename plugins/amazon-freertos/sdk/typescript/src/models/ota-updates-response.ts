import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { otaUpdateSummarySchema, type OtaUpdateSummary } from "./ota-update-summary.js";

export type OtaUpdatesResponse = {
  otaUpdates?: OtaUpdateSummary[];
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const otaUpdatesResponseSchema: Schema<OtaUpdatesResponse> = s.object<OtaUpdatesResponse>(
  {
    otaUpdates: s.optional(s.array(s.lazy(() => otaUpdateSummarySchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
