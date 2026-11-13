import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectObjectSchema, type ProjectObject } from "./unions/project-object.js";

export type PaginatedList1 = {
  /** Objects in the current page of results. */
  results: ProjectObject[];
  /** Cursor for the next page of results, or `null` when there are no more results. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedList1Schema: Schema<PaginatedList1> = s.object<PaginatedList1>(
  {
    results: s.array(s.lazy(() => projectObjectSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
