import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MethodDistribution = {
  cdr?: number;
  csv?: number;
  pdf?: number;
  web?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const methodDistributionSchema: Schema<MethodDistribution> = s.object<MethodDistribution>(
  {
    cdr: s.optional(s.int()),
    csv: s.optional(s.int()),
    pdf: s.optional(s.int()),
    web: s.optional(s.int()),
    _keysMap: {
      cdr: "CDR",
      csv: "CSV",
      pdf: "PDF",
      web: "WEB",
    },
  },
  { additionalProperties: s.json() },
);
