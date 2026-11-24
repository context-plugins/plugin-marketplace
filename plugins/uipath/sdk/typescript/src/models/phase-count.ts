import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Count of automations in a specific pipeline phase */
export type PhaseCount = {
  /** Name of the pipeline phase */
  phase?: string;
  /** Number of automations in this phase */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phaseCountSchema: Schema<PhaseCount> = s.object<PhaseCount>(
  {
    phase: s.optional(s.string()),
    count: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
