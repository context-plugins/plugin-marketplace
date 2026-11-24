import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VariableValidationEntity = {
  schemaType: Record<string, unknown>;
  enumValues?: Record<string, unknown>;
  regexPattern?: string;
  jsonSchema?: string;
  description: string;
  exampleValue: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const variableValidationEntitySchema: Schema<VariableValidationEntity> =
  s.object<VariableValidationEntity>(
    {
      schemaType: s.record(s.string(), s.unknown()),
      enumValues: s.optional(s.record(s.string(), s.unknown())),
      regexPattern: s.optional(s.string()),
      jsonSchema: s.optional(s.string()),
      description: s.string(),
      exampleValue: s.record(s.string(), s.unknown()),
    },
    { additionalProperties: s.json() },
  );
