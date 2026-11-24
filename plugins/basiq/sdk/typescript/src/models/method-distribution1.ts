import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusDistributionSchema, type StatusDistribution } from "./status-distribution.js";

export type MethodDistribution1 = {
  cdr?: StatusDistribution;
  csv?: StatusDistribution;
  pdf?: StatusDistribution;
  web?: StatusDistribution;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const methodDistribution1Schema: Schema<MethodDistribution1> = s.object<MethodDistribution1>(
  {
    cdr: s.optional(s.lazy(() => statusDistributionSchema)),
    csv: s.optional(s.lazy(() => statusDistributionSchema)),
    pdf: s.optional(s.lazy(() => statusDistributionSchema)),
    web: s.optional(s.lazy(() => statusDistributionSchema)),
    _keysMap: {
      cdr: "CDR",
      csv: "CSV",
      pdf: "PDF",
      web: "WEB",
    },
  },
  { additionalProperties: s.json() },
);
