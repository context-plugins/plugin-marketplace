import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceSchema, type Source } from "./source.js";
import { type1Schema, type Type1 } from "./type1.js";

export type Cover = {
  source?: Source | null;
  type?: Type1 | null;
  url?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coverSchema: Schema<Cover> = s.object<Cover>(
  {
    source: s.optionalNullable(s.lazy(() => sourceSchema)),
    type: s.optionalNullable(s.lazy(() => type1Schema)),
    url: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
