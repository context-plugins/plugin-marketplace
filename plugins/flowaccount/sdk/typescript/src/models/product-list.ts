import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productCategorySchema, type ProductCategory } from "./product-category.js";
import { productNonInventoryTypeSchema, type ProductNonInventoryType } from "./product-non-inventory-type.js";
import { productTypesSchema, type ProductTypes } from "./product-types.js";
import { productUnitInternalSchema, productUnitSchema, type ProductUnit } from "./product-unit.js";

export type ProductList = {
  id?: number;
  barCode?: string | null;
  name: string;
  unitMeasurement?: string | null;
  unitPrice?: number | null;
  unitPriceWithVat?: number | null;
  unitWeight?: number | null;
  categoryId?: number | null;
  description?: string | null;
  remarks?: string | null;
  galleryId?: number | null;
  isVat?: boolean;
  mainUnitId?: number | null;
  subUnitId?: number | null;
  mainUnitAmount?: number;
  subUnitAmount?: number;
  hasStock?: boolean;
  productCode?: string | null;
  /** 1 = Service 3 = ProductWithNoStock 5 = ProductWithStock */
  type?: ProductTypes;
  buyPrice?: number | null;
  buyPriceWithVat?: number | null;
  isBuyVat?: boolean;
  allowOverSold?: boolean;
  image?: string | null;
  isDelete?: boolean;
  vatRate?: number;
  buyVatRate?: number;
  resetTransactionId?: number | null;
  createdOn?: Date;
  modifiedOn?: Date;
  broughtForwardOn?: Date | null;
  buyDescription?: string | null;
  buyChartOfAccountId?: number | null;
  sellChartOfAccountId?: number | null;
  productNonInventoryType?: ProductNonInventoryType;
  transactionId?: string | null;
  productMainUnit?: ProductUnit;
  productSubUnit?: ProductUnit;
  productCategory?: ProductCategory;
  isMigrate?: boolean;
};

const productListProperties: s.Shape<ProductList> = {
  id: s.optional(s.int()),
  barCode: s.optionalNullable(s.string()),
  name: s.string(),
  unitMeasurement: s.optionalNullable(s.string()),
  unitPrice: s.optionalNullable(s.float64()),
  unitPriceWithVat: s.optionalNullable(s.float64()),
  unitWeight: s.optionalNullable(s.float64()),
  categoryId: s.optionalNullable(s.int()),
  description: s.optionalNullable(s.string()),
  remarks: s.optionalNullable(s.string()),
  galleryId: s.optionalNullable(s.int()),
  isVat: s.optional(s.boolean()),
  mainUnitId: s.optionalNullable(s.int()),
  subUnitId: s.optionalNullable(s.int()),
  mainUnitAmount: s.optional(s.int()),
  subUnitAmount: s.optional(s.int()),
  hasStock: s.optional(s.boolean()),
  productCode: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => productTypesSchema)),
  buyPrice: s.optionalNullable(s.float64()),
  buyPriceWithVat: s.optionalNullable(s.float64()),
  isBuyVat: s.optional(s.boolean()),
  allowOverSold: s.optional(s.boolean()),
  image: s.optionalNullable(s.string()),
  isDelete: s.optional(s.boolean()),
  vatRate: s.optional(s.int()),
  buyVatRate: s.optional(s.int()),
  resetTransactionId: s.optionalNullable(s.int()),
  createdOn: s.optional(s.dateTime()),
  modifiedOn: s.optional(s.dateTime()),
  broughtForwardOn: s.optionalNullable(s.dateTime()),
  buyDescription: s.optionalNullable(s.string()),
  buyChartOfAccountId: s.optionalNullable(s.int()),
  sellChartOfAccountId: s.optionalNullable(s.int()),
  productNonInventoryType: s.optional(s.lazy(() => productNonInventoryTypeSchema)),
  transactionId: s.optionalNullable(s.string()),
  productMainUnit: s.optional(s.lazy(() => productUnitInternalSchema)),
  productSubUnit: s.optional(s.lazy(() => productUnitInternalSchema)),
  productCategory: s.optional(s.lazy(() => productCategorySchema)),
  isMigrate: s.optional(s.boolean()),
};

export const productListInternalSchema: Schema<ProductList> = s.object<ProductList>(productListProperties);

export const productListSchema: Schema<ProductList> = s.lazySchema(() =>
  s.object<ProductList>({
    ...productListProperties,
    barCode: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(255))),
    name: s.string().check(s.minLength(0), s.maxLength(255)),
    unitMeasurement: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
    productCode: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(255))),
    transactionId: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
    productMainUnit: s.optional(s.lazy(() => productUnitSchema)),
    productSubUnit: s.optional(s.lazy(() => productUnitSchema)),
  }),
);
