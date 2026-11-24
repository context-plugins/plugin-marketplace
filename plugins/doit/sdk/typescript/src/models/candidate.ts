import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Candidate = {
  id?: string;
  name?: string;
  provider?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const candidateSchema: Schema<Candidate> = s.object<Candidate>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    provider: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
