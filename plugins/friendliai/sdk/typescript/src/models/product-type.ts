import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Product type. */
export const ProductType = {
  ModelApis: "model_apis",
  DedicatedEndpoints: "dedicated_endpoints",
} as const;
export type ProductType = (typeof ProductType)[keyof typeof ProductType] | (string & {});

export const productTypeSchema: EnumSchema<ProductType> = s.enumOf<ProductType>(ProductType);
