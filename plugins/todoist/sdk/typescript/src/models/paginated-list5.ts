import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { labelRestViewSchema, type LabelRestView } from "./label-rest-view.js";

export type PaginatedList5 = {
  /** Objects in the current page of results. */
  results: LabelRestView[];
  /** Cursor for the next page of results, or `null` when there are no more results. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedList5Schema: Schema<PaginatedList5> = s.object<PaginatedList5>(
  {
    results: s.array(s.lazy(() => labelRestViewSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
