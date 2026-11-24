import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source1 = {
  id?: string;
  name?: string;
  agency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const source1Schema: Schema<Source1> = s.object<Source1>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    agency: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
