import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JsonApiResource = {
  id?: string;
  type?: string;
  attributes?: Record<string, unknown>;
  relationships?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jsonApiResourceSchema: Schema<JsonApiResource> = s.object<JsonApiResource>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.string()),
    attributes: s.optional(s.record(s.string(), s.unknown())),
    relationships: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
