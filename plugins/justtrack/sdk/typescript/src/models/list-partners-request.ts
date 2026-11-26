import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  listPartnersFilterInternalSchema,
  listPartnersFilterSchema,
  type ListPartnersFilter,
} from "./list-partners-filter.js";
import { requiredPageInternalSchema, requiredPageSchema, type RequiredPage } from "./required-page.js";

export type ListPartnersRequest = {
  page: RequiredPage;
  filter?: ListPartnersFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listPartnersRequestProperties: s.Shape<ListPartnersRequest> = {
  page: requiredPageInternalSchema,
  filter: s.optional(s.lazy(() => listPartnersFilterInternalSchema)),
};

export const listPartnersRequestInternalSchema: Schema<ListPartnersRequest> = s.object<ListPartnersRequest>(
  listPartnersRequestProperties,
  { additionalProperties: s.json() },
);

export const listPartnersRequestSchema: Schema<ListPartnersRequest> = s.lazySchema(() =>
  s.object<ListPartnersRequest>(
    {
      ...listPartnersRequestProperties,
      page: requiredPageSchema,
      filter: s.optional(s.lazy(() => listPartnersFilterSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
