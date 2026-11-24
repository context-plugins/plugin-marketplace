import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnvironmentVariable = {
  /** The name of the environment variable */
  variable?: string;
  /** When the variable was created */
  createdAt?: Date;
  /** When the variable was last updated */
  updatedAt?: Date;
  /** The ID of the context this variable belongs to */
  contextId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentVariableSchema: Schema<EnvironmentVariable> = s.object<EnvironmentVariable>(
  {
    variable: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    contextId: s.optional(s.string()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
      contextId: "context_id",
    },
  },
  { additionalProperties: s.json() },
);
