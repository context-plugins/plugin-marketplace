import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeDeliverdDevAudiencesApiSchema,
  type TypeDeliverdDevAudiencesApi,
} from "./type-deliverd-dev-audiences-api.js";

export type Candidate = {
  type: TypeDeliverdDevAudiencesApi;
  id: string | null;
  label: string;
  detail?: string;
  score: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const candidateSchema: Schema<Candidate> = s.object<Candidate>(
  {
    type: typeDeliverdDevAudiencesApiSchema,
    id: s.nullable(s.string()),
    label: s.string(),
    detail: s.optional(s.string()),
    score: s.float64(),
  },
  { additionalProperties: s.json() },
);
