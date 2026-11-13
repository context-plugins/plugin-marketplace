import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { collaboratorSchema, type Collaborator } from "./collaborator.js";

export type PaginatedList2 = {
  /** Objects in the current page of results. */
  results: Collaborator[];
  /** Cursor for the next page of results, or `null` when there are no more results. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedList2Schema: Schema<PaginatedList2> = s.object<PaginatedList2>(
  {
    results: s.array(s.lazy(() => collaboratorSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
