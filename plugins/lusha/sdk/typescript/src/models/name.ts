import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { coverageSchema, type Coverage } from "./coverage.js";
import { name1Schema, type Name1 } from "./name1.js";

export type Name = {
  coverage?: Coverage;
  name?: Name1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nameSchema: Schema<Name> = s.object<Name>(
  {
    coverage: s.optional(s.lazy(() => coverageSchema)),
    name: s.optional(s.lazy(() => name1Schema)),
  },
  { additionalProperties: s.json() },
);
