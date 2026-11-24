import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum = {
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumSchema: Schema<Datum> = s.object<Datum>(
  {
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
