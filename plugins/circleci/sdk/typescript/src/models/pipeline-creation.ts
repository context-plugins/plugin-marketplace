import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PipelineCreation = {
  /** The unique identifier of the new pipeline */
  id?: string;
  /** The state of the new pipeline */
  state?: string;
  /** The pipeline number */
  number?: number;
  /** When the pipeline was created */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelineCreationSchema: Schema<PipelineCreation> = s.object<PipelineCreation>(
  {
    id: s.optional(s.string()),
    state: s.optional(s.string()),
    number: s.optional(s.int()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
