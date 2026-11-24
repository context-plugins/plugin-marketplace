import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1JsonschemageneratorRequest = {
  /** The sample JSON data to generate a schema from */
  json: string;
  /** The title for the generated schema (default: 'Generated Schema') */
  title?: string;
  /** Optional description for the schema */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1JsonschemageneratorRequestSchema: Schema<V1JsonschemageneratorRequest> =
  s.object<V1JsonschemageneratorRequest>(
    {
      json: s.string(),
      title: s.optional(s.string()),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
