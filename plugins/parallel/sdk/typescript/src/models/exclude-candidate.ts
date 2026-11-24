import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Exclude candidate input model for FindAll run. */
export type ExcludeCandidate = {
  /** Name of the entity to exclude from results. */
  name: string;
  /** URL of the entity to exclude from results. */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const excludeCandidateSchema: Schema<ExcludeCandidate> = s.object<ExcludeCandidate>(
  {
    name: s.string(),
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
