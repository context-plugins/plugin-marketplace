import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectEnvVar = {
  /** The name of the environment variable */
  name?: string;
  /** The masked value of the environment variable */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectEnvVarSchema: Schema<ProjectEnvVar> = s.object<ProjectEnvVar>(
  {
    name: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
