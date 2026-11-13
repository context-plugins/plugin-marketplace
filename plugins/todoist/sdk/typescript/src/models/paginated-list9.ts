import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicTemplateSchema, type PublicTemplate } from "./public-template.js";

export type PaginatedList9 = {
  /** Objects in the current page of results. */
  results: PublicTemplate[];
  /** Cursor for the next page of results, or `null` when there are no more results. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedList9Schema: Schema<PaginatedList9> = s.object<PaginatedList9>(
  {
    results: s.array(s.lazy(() => publicTemplateSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
