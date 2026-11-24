import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { candidateSchema, type Candidate } from "./candidate.js";

export type Ambiguou = {
  phrase: string;
  candidates: Candidate[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ambiguouSchema: Schema<Ambiguou> = s.object<Ambiguou>(
  {
    phrase: s.string(),
    candidates: s.array(s.lazy(() => candidateSchema)),
  },
  { additionalProperties: s.json() },
);
