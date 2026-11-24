import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsightImpactGraphEdge = {
  /** Identifier of the edge. Unique within a service map. */
  referenceId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightImpactGraphEdgeSchema: Schema<InsightImpactGraphEdge> = s.object<InsightImpactGraphEdge>(
  {
    referenceId: s.optional(s.int()),
    _keysMap: {
      referenceId: "ReferenceId",
    },
  },
  { additionalProperties: s.json() },
);
