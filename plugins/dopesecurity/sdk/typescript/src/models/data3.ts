import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationResponseSchema, type PaginationResponse } from "./pagination-response.js";
import { policySchema, type Policy } from "./policy.js";

export type Data3 = {
  policies: Policy[];
  /** Information about current and next page for cursor based pagination */
  pageInfo: PaginationResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data3Schema: Schema<Data3> = s.object<Data3>(
  {
    policies: s.array(s.lazy(() => policySchema)),
    pageInfo: paginationResponseSchema,
  },
  { additionalProperties: s.json() },
);
