import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FlowsToCreate = {
  key?: string;
  name?: string;
  nodeCount?: number;
  incompleteNodeCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const flowsToCreateSchema: Schema<FlowsToCreate> = s.object<FlowsToCreate>(
  {
    key: s.optional(s.string()),
    name: s.optional(s.string()),
    nodeCount: s.optional(s.int()),
    incompleteNodeCount: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
