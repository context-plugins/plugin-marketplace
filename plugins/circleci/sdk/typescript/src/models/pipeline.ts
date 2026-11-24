import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The pipeline this job belongs to */
export type Pipeline = {
  /** The pipeline ID */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelineSchema: Schema<Pipeline> = s.object<Pipeline>(
  {
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
