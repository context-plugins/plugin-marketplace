import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  listBidsFilterInternalSchema,
  listBidsFilterSchema,
  type ListBidsFilter,
} from "./list-bids-filter.js";
import { requiredPageInternalSchema, requiredPageSchema, type RequiredPage } from "./required-page.js";

export type ListBidsRequest = {
  page: RequiredPage;
  filter?: ListBidsFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listBidsRequestProperties: s.Shape<ListBidsRequest> = {
  page: requiredPageInternalSchema,
  filter: s.optional(s.lazy(() => listBidsFilterInternalSchema)),
};

export const listBidsRequestInternalSchema: Schema<ListBidsRequest> = s.object<ListBidsRequest>(
  listBidsRequestProperties,
  { additionalProperties: s.json() },
);

export const listBidsRequestSchema: Schema<ListBidsRequest> = s.lazySchema(() =>
  s.object<ListBidsRequest>(
    {
      ...listBidsRequestProperties,
      page: requiredPageSchema,
      filter: s.optional(s.lazy(() => listBidsFilterSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
