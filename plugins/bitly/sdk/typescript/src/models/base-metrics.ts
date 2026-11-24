import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { facet1Schema, type Facet1 } from "./facet1.js";

export type BaseMetrics = {
  unit?: string;
  units?: number;
  facet?: Facet1;
  unitReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const baseMetricsSchema: Schema<BaseMetrics> = s.object<BaseMetrics>(
  {
    unit: s.optional(s.string()),
    units: s.optional(s.int()),
    facet: s.optional(s.lazy(() => facet1Schema)),
    unitReference: s.optional(s.string()),
    _keysMap: {
      unitReference: "unit_reference",
    },
  },
  { additionalProperties: s.json() },
);
