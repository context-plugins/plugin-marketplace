import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  outputDeterministicLevelSchema,
  type OutputDeterministicLevel,
} from "./output-deterministic-level.js";

/** A node in the RDD operation graph. Corresponds to a single RDD. */
export type RddOperationNode = {
  barrier?: boolean;
  callsite?: string;
  nodeId?: number;
  outputDeterministicLevel?: OutputDeterministicLevel;
  cached?: boolean;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rddOperationNodeSchema: Schema<RddOperationNode> = s.object<RddOperationNode>(
  {
    barrier: s.optional(s.boolean()),
    callsite: s.optional(s.string()),
    nodeId: s.optional(s.int()),
    outputDeterministicLevel: s.optional(s.lazy(() => outputDeterministicLevelSchema)),
    cached: s.optional(s.boolean()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
