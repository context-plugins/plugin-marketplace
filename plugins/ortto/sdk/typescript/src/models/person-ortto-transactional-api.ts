import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PersonOrttoTransactionalApi = {
  fields?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personOrttoTransactionalApiSchema: Schema<PersonOrttoTransactionalApi> =
  s.object<PersonOrttoTransactionalApi>(
    {
      fields: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
