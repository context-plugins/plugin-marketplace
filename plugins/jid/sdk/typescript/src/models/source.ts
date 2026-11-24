import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source = {
  id?: string;
  name?: string;
  agency?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceSchema: Schema<Source> = s.object<Source>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    agency: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
