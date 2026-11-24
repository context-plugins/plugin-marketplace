import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationResponseSchema, type PaginationResponse } from "./pagination-response.js";

export type Data = {
  /** Information about current and next page for cursor based pagination */
  pageInfo: PaginationResponse;
  customCategories: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    pageInfo: paginationResponseSchema,
    customCategories: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
