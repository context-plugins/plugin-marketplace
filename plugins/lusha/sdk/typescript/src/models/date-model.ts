import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { coverageSchema, type Coverage } from "./coverage.js";

export type DateModel = {
  coverage?: Coverage;
  date?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dateModelSchema: Schema<DateModel> = s.object<DateModel>(
  {
    coverage: s.optional(s.lazy(() => coverageSchema)),
    date: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
