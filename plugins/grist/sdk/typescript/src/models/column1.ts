import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Column1 = {
  id?: string;
  fields?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const column1Schema: Schema<Column1> = s.object<Column1>(
  {
    id: s.optional(s.string()),
    fields: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
