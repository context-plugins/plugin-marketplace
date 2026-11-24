import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectEnvvarRequest = {
  /** The name of the environment variable */
  name: string;
  /** The value of the environment variable */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectEnvvarRequestSchema: Schema<ProjectEnvvarRequest> = s.object<ProjectEnvvarRequest>(
  {
    name: s.string(),
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
