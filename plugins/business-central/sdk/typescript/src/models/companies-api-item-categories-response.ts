import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemCategoryInternalSchema, itemCategorySchema, type ItemCategory } from "./item-category.js";

export type CompaniesApiItemCategoriesResponse = {
  value?: ItemCategory[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiItemCategoriesResponseProperties: s.Shape<CompaniesApiItemCategoriesResponse> = {
  value: s.optional(s.array(s.lazy(() => itemCategoryInternalSchema))),
};

export const companiesApiItemCategoriesResponseInternalSchema: Schema<CompaniesApiItemCategoriesResponse> =
  s.object<CompaniesApiItemCategoriesResponse>(companiesApiItemCategoriesResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiItemCategoriesResponseSchema: Schema<CompaniesApiItemCategoriesResponse> =
  s.lazySchema(() =>
    s.object<CompaniesApiItemCategoriesResponse>(
      {
        ...companiesApiItemCategoriesResponseProperties,
        value: s.optional(s.array(s.lazy(() => itemCategorySchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
