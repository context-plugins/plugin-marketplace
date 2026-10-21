import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personDetailsSchema, type PersonDetails } from "./person-details.js";

export type PeopleListResponse = {
  /** A list of recognized person objects. */
  people?: PersonDetails[];
  /** The cursor to use for the next page of results. */
  nextCursor?: string;
};

export const peopleListResponseSchema: Schema<PeopleListResponse> = s.object<PeopleListResponse>({
  people: s.optional(s.array(s.lazy(() => personDetailsSchema))),
  nextCursor: s.optional(s.string()),
  _keysMap: {
    nextCursor: "next_cursor",
  },
});
