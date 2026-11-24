import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { unitSchema, type Unit } from "./unit.js";

export type BitlinkScansSummary = {
  totalScans?: number;
  units?: number;
  unit?: Unit;
  unitReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bitlinkScansSummarySchema: Schema<BitlinkScansSummary> = s.object<BitlinkScansSummary>(
  {
    totalScans: s.optional(s.int()),
    units: s.optional(s.int()),
    unit: s.optional(s.lazy(() => unitSchema)),
    unitReference: s.optional(s.string()),
    _keysMap: {
      totalScans: "total_scans",
      unitReference: "unit_reference",
    },
  },
  { additionalProperties: s.json() },
);
