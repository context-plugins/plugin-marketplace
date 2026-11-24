import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iStockCardSchema, type IStockCard } from "./istock-card.js";
import { productNonInventoryTypeSchema, type ProductNonInventoryType } from "./product-non-inventory-type.js";
import { productTypesSchema, type ProductTypes } from "./product-types.js";
import { vatTypesSchema, type VatTypes } from "./vat-types.js";

export type IProductResult = {
  id?: number;
  /** 1 = Service 3 = ProductWithNoStock 5 = ProductWithStock */
  type?: ProductTypes;
  code?: string | null;
  name?: string | null;
  barcode?: string | null;
  /** 1 = Include 3 = Exclude 5 = Zero 7 = None */
  buyVatType?: VatTypes;
  buyPrice?: number;
  buyPriceWithVat?: number;
  buyDescription?: string | null;
  buyChartOfAccountId?: number | null;
  buyChartOfAccountCode?: string | null;
  buyChartOfAccountNameLocal?: string | null;
  buyChartOfAccountNameForeign?: string | null;
  /** 1 = Include 3 = Exclude 5 = Zero 7 = None */
  sellVatType?: VatTypes;
  sellPrice?: number;
  sellPriceWithVat?: number;
  sellDescription?: string | null;
  sellChartOfAccountId?: number | null;
  sellChartOfAccountCode?: string | null;
  sellChartOfAccountNameLocal?: string | null;
  sellChartOfAccountNameForeign?: string | null;
  categoryId?: number | null;
  categoryName?: string | null;
  unitId?: number | null;
  unitName?: string | null;
  productNonInventoryType?: ProductNonInventoryType;
  broughtForwardOn?: Date | null;
  inventoryPublishedOn?: Date | null;
  inventoryQuantity?: number | null;
  inventoryPrice?: number | null;
  inventoryTotal?: number | null;
  inventoryRemark?: string | null;
  averageBuyPrice?: number | null;
  averageSellPrice?: number | null;
  remainingStock?: number | null;
  totalValueInHand?: number | null;
  stockCard?: IStockCard[] | null;
};

export const iProductResultSchema: Schema<IProductResult> = s.object<IProductResult>({
  id: s.optional(s.int()),
  type: s.optional(s.lazy(() => productTypesSchema)),
  code: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  barcode: s.optionalNullable(s.string()),
  buyVatType: s.optional(s.lazy(() => vatTypesSchema)),
  buyPrice: s.optional(s.float64()),
  buyPriceWithVat: s.optional(s.float64()),
  buyDescription: s.optionalNullable(s.string()),
  buyChartOfAccountId: s.optionalNullable(s.int()),
  buyChartOfAccountCode: s.optionalNullable(s.string()),
  buyChartOfAccountNameLocal: s.optionalNullable(s.string()),
  buyChartOfAccountNameForeign: s.optionalNullable(s.string()),
  sellVatType: s.optional(s.lazy(() => vatTypesSchema)),
  sellPrice: s.optional(s.float64()),
  sellPriceWithVat: s.optional(s.float64()),
  sellDescription: s.optionalNullable(s.string()),
  sellChartOfAccountId: s.optionalNullable(s.int()),
  sellChartOfAccountCode: s.optionalNullable(s.string()),
  sellChartOfAccountNameLocal: s.optionalNullable(s.string()),
  sellChartOfAccountNameForeign: s.optionalNullable(s.string()),
  categoryId: s.optionalNullable(s.int()),
  categoryName: s.optionalNullable(s.string()),
  unitId: s.optionalNullable(s.int()),
  unitName: s.optionalNullable(s.string()),
  productNonInventoryType: s.optional(s.lazy(() => productNonInventoryTypeSchema)),
  broughtForwardOn: s.optionalNullable(s.dateTime()),
  inventoryPublishedOn: s.optionalNullable(s.dateTime()),
  inventoryQuantity: s.optionalNullable(s.float64()),
  inventoryPrice: s.optionalNullable(s.float64()),
  inventoryTotal: s.optionalNullable(s.float64()),
  inventoryRemark: s.optionalNullable(s.string()),
  averageBuyPrice: s.optionalNullable(s.float64()),
  averageSellPrice: s.optionalNullable(s.float64()),
  remainingStock: s.optionalNullable(s.float64()),
  totalValueInHand: s.optionalNullable(s.float64()),
  stockCard: s.optionalNullable(s.array(s.lazy(() => iStockCardSchema))),
});
