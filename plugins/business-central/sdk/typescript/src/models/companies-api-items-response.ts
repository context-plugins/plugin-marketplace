import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemInternalSchema, itemSchema, type Item } from "./item.js";

export type CompaniesApiItemsResponse = {
  value?: Item[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiItemsResponseProperties: s.Shape<CompaniesApiItemsResponse> = {
  value: s.optional(s.array(s.lazy(() => itemInternalSchema))),
};

export const companiesApiItemsResponseInternalSchema: Schema<CompaniesApiItemsResponse> =
  s.object<CompaniesApiItemsResponse>(companiesApiItemsResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiItemsResponseSchema: Schema<CompaniesApiItemsResponse> = s.lazySchema(() =>
  s.object<CompaniesApiItemsResponse>(
    {
      ...companiesApiItemsResponseProperties,
      value: s.optional(s.array(s.lazy(() => itemSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
