import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeDynamics365BusinessCentralApiV20ItemsApiSchema,
  type TypeDynamics365BusinessCentralApiV20ItemsApi,
} from "./type-dynamics365-business-central-api-v20-items-api.js";

export type ItemCreate = {
  number?: string;
  displayName: string;
  type?: TypeDynamics365BusinessCentralApiV20ItemsApi;
  itemCategoryCode?: string;
  blocked?: boolean;
  gtin?: string;
  unitPrice?: number;
  unitCost?: number;
  taxGroupCode?: string;
  baseUnitOfMeasureCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const itemCreateProperties: s.Shape<ItemCreate> = {
  number: s.optional(s.string()),
  displayName: s.string(),
  type: s.optional(s.lazy(() => typeDynamics365BusinessCentralApiV20ItemsApiSchema)),
  itemCategoryCode: s.optional(s.string()),
  blocked: s.optional(s.boolean()),
  gtin: s.optional(s.string()),
  unitPrice: s.optional(s.float64()),
  unitCost: s.optional(s.float64()),
  taxGroupCode: s.optional(s.string()),
  baseUnitOfMeasureCode: s.optional(s.string()),
};

export const itemCreateInternalSchema: Schema<ItemCreate> = s.object<ItemCreate>(itemCreateProperties, {
  additionalProperties: s.json(),
});

export const itemCreateSchema: Schema<ItemCreate> = s.lazySchema(() =>
  s.object<ItemCreate>(
    {
      ...itemCreateProperties,
      number: s.optional(s.string().check(s.maxLength(20))),
      displayName: s.string().check(s.maxLength(100)),
      itemCategoryCode: s.optional(s.string().check(s.maxLength(20))),
      gtin: s.optional(s.string().check(s.maxLength(14))),
      taxGroupCode: s.optional(s.string().check(s.maxLength(20))),
      baseUnitOfMeasureCode: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
