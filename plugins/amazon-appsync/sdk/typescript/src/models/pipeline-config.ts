import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PipelineConfig = {
  /** A list of Function objects. */
  functions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelineConfigSchema: Schema<PipelineConfig> = s.object<PipelineConfig>(
  {
    functions: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
