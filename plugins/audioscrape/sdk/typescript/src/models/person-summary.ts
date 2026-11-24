import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PersonSummary = {
  description?: string | null;
  id: number;
  name: string;
  slug: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personSummarySchema: Schema<PersonSummary> = s.object<PersonSummary>(
  {
    description: s.optionalNullable(s.string()),
    id: s.int(),
    name: s.string(),
    slug: s.string(),
  },
  { additionalProperties: s.json() },
);
