import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type PersonGetRequest = {
  limit?: number;
  offset?: number;
  sortByFieldId?: string;
  sortOrder?: SortOrder;
  fields?: string[];
  filter?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personGetRequestSchema: Schema<PersonGetRequest> = s.object<PersonGetRequest>(
  {
    limit: s.optional(s.int()),
    offset: s.optional(s.int()),
    sortByFieldId: s.optional(s.string()),
    sortOrder: s.optional(s.lazy(() => sortOrderSchema)),
    fields: s.optional(s.array(s.string())),
    filter: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      sortByFieldId: "sort_by_field_id",
      sortOrder: "sort_order",
    },
  },
  { additionalProperties: s.json() },
);
