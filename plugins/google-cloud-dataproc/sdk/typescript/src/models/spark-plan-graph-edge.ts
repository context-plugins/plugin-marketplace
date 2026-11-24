import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Represents a directed edge in the spark plan tree from child to parent. */
export type SparkPlanGraphEdge = {
  toId?: string;
  fromId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkPlanGraphEdgeSchema: Schema<SparkPlanGraphEdge> = s.object<SparkPlanGraphEdge>(
  {
    toId: s.optional(s.string()),
    fromId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
