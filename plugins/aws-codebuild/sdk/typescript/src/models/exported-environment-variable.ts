import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExportedEnvironmentVariable = {
  /** The name of the exported environment variable. */
  name?: string;
  /** The value assigned to the exported environment variable. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exportedEnvironmentVariableSchema: Schema<ExportedEnvironmentVariable> =
  s.object<ExportedEnvironmentVariable>(
    {
      name: s.optional(s.string()),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
