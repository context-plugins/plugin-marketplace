import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phaseCountSchema, type PhaseCount } from "./phase-count.js";

/** Summary of the automation pipeline distribution across phases */
export type PipelineData = {
  phases?: PhaseCount[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelineDataSchema: Schema<PipelineData> = s.object<PipelineData>(
  {
    phases: s.optional(s.array(s.lazy(() => phaseCountSchema))),
  },
  { additionalProperties: s.json() },
);
