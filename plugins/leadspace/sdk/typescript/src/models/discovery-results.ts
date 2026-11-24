import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

export type DiscoveryResults = {
  /** List of expansion results */
  results?: Result[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const discoveryResultsSchema: Schema<DiscoveryResults> = s.object<DiscoveryResults>(
  {
    results: s.optional(s.array(s.lazy(() => resultSchema))),
  },
  { additionalProperties: s.json() },
);
