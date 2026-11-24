import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { atomSchema, type Atom } from "./atom.js";

/** Paginated query results for Atoms. */
export type AtomQueryResult = {
  /** Total number of matching records. */
  numberOfResults?: number;
  /** Token for retrieving the next page of results. */
  queryToken?: string;
  result?: Atom[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const atomQueryResultSchema: Schema<AtomQueryResult> = s.object<AtomQueryResult>(
  {
    numberOfResults: s.optional(s.int()),
    queryToken: s.optional(s.string()),
    result: s.optional(s.array(s.lazy(() => atomSchema))),
  },
  { additionalProperties: s.json() },
);
