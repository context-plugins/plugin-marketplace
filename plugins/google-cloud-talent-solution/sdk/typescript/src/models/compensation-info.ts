import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { compensationEntrySchema, type CompensationEntry } from "./compensation-entry.js";
import { compensationRange1Schema, type CompensationRange1 } from "./compensation-range1.js";
import { compensationRange5Schema, type CompensationRange5 } from "./compensation-range5.js";

/** Job compensation details. */
export type CompensationInfo = {
  /**
   * Output only. Annualized base compensation range. Computed as base compensation entry's
   * CompensationEntry.amount times CompensationEntry.expected_units_per_year. See CompensationEntry
   * for explanation on compensation annualization.
   */
  annualizedBaseCompensationRange?: CompensationRange5;
  /**
   * Output only. Annualized total compensation range. Computed as all compensation entries'
   * CompensationEntry.amount times CompensationEntry.expected_units_per_year. See CompensationEntry
   * for explanation on compensation annualization.
   */
  annualizedTotalCompensationRange?: CompensationRange1;
  /**
   * Job compensation information. At most one entry can be of type
   * CompensationInfo.CompensationType.BASE, which is referred as **base compensation entry** for
   * the job.
   */
  entries?: CompensationEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compensationInfoSchema: Schema<CompensationInfo> = s.object<CompensationInfo>(
  {
    annualizedBaseCompensationRange: s.optional(s.lazy(() => compensationRange5Schema)),
    annualizedTotalCompensationRange: s.optional(s.lazy(() => compensationRange1Schema)),
    entries: s.optional(s.array(s.lazy(() => compensationEntrySchema))),
  },
  { additionalProperties: s.json() },
);
