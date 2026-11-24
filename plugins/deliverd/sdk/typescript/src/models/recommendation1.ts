import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { verdict1Schema, type Verdict1 } from "./verdict1.js";

export type Recommendation1 = {
  verdict: Verdict1;
  summary: string | null;
  confidence: number | null;
  rationale: string | null;
  source: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendation1Schema: Schema<Recommendation1> = s.object<Recommendation1>(
  {
    verdict: verdict1Schema,
    summary: s.nullable(s.string()),
    confidence: s.nullable(s.float64()),
    rationale: s.nullable(s.string()),
    source: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
