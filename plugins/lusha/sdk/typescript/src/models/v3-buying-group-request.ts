import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationInternalSchema, paginationSchema, type Pagination } from "./pagination.js";
import { personaSchema, type Persona } from "./persona.js";
import {
  v3BuyingGroupCompanyItemSchema,
  type V3BuyingGroupCompanyItem,
} from "./v3-buying-group-company-item.js";

export type V3BuyingGroupRequest = {
  companies: V3BuyingGroupCompanyItem[];
  /** Filter results to specific persona roles. Omit to return all three. */
  personas?: Persona[];
  /** Maximum number of contacts returned per company. @default 60 */
  contactsLimit?: number;
  /** Optional. If omitted, defaults to page 0, size 100. */
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3BuyingGroupRequestProperties: s.Shape<V3BuyingGroupRequest> = {
  companies: s.array(s.lazy(() => v3BuyingGroupCompanyItemSchema)),
  personas: s.optional(s.array(s.lazy(() => personaSchema))),
  contactsLimit: s.defaulted(s.int(), 60),
  pagination: s.optional(s.lazy(() => paginationInternalSchema)),
};

export const v3BuyingGroupRequestInternalSchema: Schema<V3BuyingGroupRequest> =
  s.object<V3BuyingGroupRequest>(v3BuyingGroupRequestProperties, { additionalProperties: s.json() });

export const v3BuyingGroupRequestSchema: Schema<V3BuyingGroupRequest> = s.lazySchema(() =>
  s.object<V3BuyingGroupRequest>(
    {
      ...v3BuyingGroupRequestProperties,
      companies: s.array(s.lazy(() => v3BuyingGroupCompanyItemSchema)).check(s.minLength(1), s.maxLength(25)),
      contactsLimit: s.defaulted(s.int().check(s.gte(1)), 60),
      pagination: s.optional(s.lazy(() => paginationSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
