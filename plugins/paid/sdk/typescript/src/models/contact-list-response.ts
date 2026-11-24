import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contact1Schema, type Contact1 } from "./contact1.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ContactListResponse = {
  data: Contact1[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactListResponseSchema: Schema<ContactListResponse> = s.object<ContactListResponse>(
  {
    data: s.array(s.lazy(() => contact1Schema)),
    pagination: paginationSchema,
  },
  { additionalProperties: s.json() },
);
