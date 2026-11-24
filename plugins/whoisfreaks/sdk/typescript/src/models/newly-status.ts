import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateRangeStatusSchema, type DateRangeStatus } from "./date-range-status.js";

export type NewlyStatus = {
  gtld?: DateRangeStatus;
  cctld?: DateRangeStatus;
  dns?: DateRangeStatus;
  cleanedGtld?: DateRangeStatus;
  cleanedCctld?: DateRangeStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newlyStatusSchema: Schema<NewlyStatus> = s.object<NewlyStatus>(
  {
    gtld: s.optional(s.lazy(() => dateRangeStatusSchema)),
    cctld: s.optional(s.lazy(() => dateRangeStatusSchema)),
    dns: s.optional(s.lazy(() => dateRangeStatusSchema)),
    cleanedGtld: s.optional(s.lazy(() => dateRangeStatusSchema)),
    cleanedCctld: s.optional(s.lazy(() => dateRangeStatusSchema)),
    _keysMap: {
      cleanedGtld: "cleaned_gtld",
      cleanedCctld: "cleaned_cctld",
    },
  },
  { additionalProperties: s.json() },
);
