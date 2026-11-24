import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { personSearchItemSchema, type PersonSearchItem } from "./person-search-item.js";

export type PersonsSearchResponse = {
  data: PersonSearchItem[];
  /** Number of distinct persons found (before `limit` slicing). */
  total: number;
  /** Present when the internal scan limit was reached and results may be incomplete. */
  note?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personsSearchResponseSchema: Schema<PersonsSearchResponse> = s.object<PersonsSearchResponse>(
  {
    data: s.array(s.lazy(() => personSearchItemSchema)),
    total: s.int(),
    note: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
