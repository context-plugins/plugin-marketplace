import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnvironmentImage = {
  /** The name of the Docker image. */
  name?: string;
  /** The description of the Docker image. */
  description?: string;
  /** A list of environment image versions. */
  versions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentImageSchema: Schema<EnvironmentImage> = s.object<EnvironmentImage>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    versions: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
