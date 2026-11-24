import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TriggerPipelineRequest = {
  /** The branch to build */
  branch?: string;
  /** The tag to build */
  tag?: string;
  /** Pipeline parameters as key-value pairs */
  parameters?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const triggerPipelineRequestSchema: Schema<TriggerPipelineRequest> = s.object<TriggerPipelineRequest>(
  {
    branch: s.optional(s.string()),
    tag: s.optional(s.string()),
    parameters: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
