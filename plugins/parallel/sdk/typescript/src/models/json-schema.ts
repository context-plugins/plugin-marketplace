import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { strictSchema, type Strict } from "./unions/strict.js";

/** Structured Outputs configuration options, including a JSON Schema. */
export type JsonSchema = {
  name: string;
  description?: string;
  schema?: Record<string, unknown>;
  strict?: Strict;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jsonSchemaSchema: Schema<JsonSchema> = s.object<JsonSchema>(
  {
    name: s.string(),
    description: s.optional(s.string()),
    schema: s.optional(s.record(s.string(), s.unknown())),
    strict: s.optional(s.lazy(() => strictSchema)),
  },
  { additionalProperties: s.json() },
);
