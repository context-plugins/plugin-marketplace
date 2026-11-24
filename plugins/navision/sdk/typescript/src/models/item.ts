import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type2Dynamics365BusinessCentralApiV20ItemsApiSchema,
  type Type2Dynamics365BusinessCentralApiV20ItemsApi,
} from "./type2-dynamics365-business-central-api-v20-items-api.js";

export type Item = {
  odataEtag?: string;
  /** The unique identifier of the item */
  id?: string;
  /** The item number */
  number?: string;
  /** The item display name */
  displayName?: string;
  /** The item display name 2 */
  displayName2?: string;
  /** The item type */
  type?: Type2Dynamics365BusinessCentralApiV20ItemsApi;
  /** The item category ID */
  itemCategoryId?: string;
  /** The item category code */
  itemCategoryCode?: string;
  /** Whether the item is blocked */
  blocked?: boolean;
  /** The Global Trade Item Number */
  gtin?: string;
  /** The current inventory quantity */
  inventory?: number;
  /** The unit price */
  unitPrice?: number;
  /** Whether the price includes tax */
  priceIncludesTax?: boolean;
  /** The unit cost */
  unitCost?: number;
  /** The tax group ID */
  taxGroupId?: string;
  /** The tax group code */
  taxGroupCode?: string;
  /** The base unit of measure ID */
  baseUnitOfMeasureId?: string;
  /** The base unit of measure code */
  baseUnitOfMeasureCode?: string;
  generalProductPostingGroupId?: string;
  generalProductPostingGroupCode?: string;
  inventoryPostingGroupId?: string;
  inventoryPostingGroupCode?: string;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const itemProperties: s.Shape<Item> = {
  odataEtag: s.optional(s.string()),
  id: s.optional(s.string()),
  number: s.optional(s.string()),
  displayName: s.optional(s.string()),
  displayName2: s.optional(s.string()),
  type: s.optional(s.lazy(() => type2Dynamics365BusinessCentralApiV20ItemsApiSchema)),
  itemCategoryId: s.optional(s.string()),
  itemCategoryCode: s.optional(s.string()),
  blocked: s.optional(s.boolean()),
  gtin: s.optional(s.string()),
  inventory: s.optional(s.float64()),
  unitPrice: s.optional(s.float64()),
  priceIncludesTax: s.optional(s.boolean()),
  unitCost: s.optional(s.float64()),
  taxGroupId: s.optional(s.string()),
  taxGroupCode: s.optional(s.string()),
  baseUnitOfMeasureId: s.optional(s.string()),
  baseUnitOfMeasureCode: s.optional(s.string()),
  generalProductPostingGroupId: s.optional(s.string()),
  generalProductPostingGroupCode: s.optional(s.string()),
  inventoryPostingGroupId: s.optional(s.string()),
  inventoryPostingGroupCode: s.optional(s.string()),
  lastModifiedDateTime: s.optional(s.dateTime()),
  _keysMap: {
    odataEtag: "@odata.etag",
  },
};

export const itemInternalSchema: Schema<Item> = s.object<Item>(itemProperties, {
  additionalProperties: s.json(),
});

export const itemSchema: Schema<Item> = s.lazySchema(() =>
  s.object<Item>(
    {
      ...itemProperties,
      number: s.optional(s.string().check(s.maxLength(20))),
      displayName: s.optional(s.string().check(s.maxLength(100))),
      displayName2: s.optional(s.string().check(s.maxLength(50))),
      itemCategoryCode: s.optional(s.string().check(s.maxLength(20))),
      gtin: s.optional(s.string().check(s.maxLength(14))),
      taxGroupCode: s.optional(s.string().check(s.maxLength(20))),
      baseUnitOfMeasureCode: s.optional(s.string().check(s.maxLength(10))),
      generalProductPostingGroupCode: s.optional(s.string().check(s.maxLength(20))),
      inventoryPostingGroupCode: s.optional(s.string().check(s.maxLength(20))),
    },
    { additionalProperties: s.json() },
  ),
);
