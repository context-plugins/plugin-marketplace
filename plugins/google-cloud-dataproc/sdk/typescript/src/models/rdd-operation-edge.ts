import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A directed edge representing dependency between two RDDs. */
export type RddOperationEdge = {
  fromId?: number;
  toId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rddOperationEdgeSchema: Schema<RddOperationEdge> = s.object<RddOperationEdge>(
  {
    fromId: s.optional(s.int()),
    toId: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
