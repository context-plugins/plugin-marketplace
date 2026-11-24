import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentSchema, type Environment } from "./environment.js";

/** Paginated query results for environments. */
export type EnvironmentQueryResult = {
  /** Total number of matching records. */
  numberOfResults?: number;
  /** Token for retrieving the next page of results. */
  queryToken?: string;
  result?: Environment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentQueryResultSchema: Schema<EnvironmentQueryResult> = s.object<EnvironmentQueryResult>(
  {
    numberOfResults: s.optional(s.int()),
    queryToken: s.optional(s.string()),
    result: s.optional(s.array(s.lazy(() => environmentSchema))),
  },
  { additionalProperties: s.json() },
);
