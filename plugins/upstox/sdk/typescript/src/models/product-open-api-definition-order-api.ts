import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Signifies if the order was either Intraday, Delivery, CO or OCO */
export const ProductOpenApiDefinitionOrderApi = {
  I: "I",
  D: "D",
} as const;
export type ProductOpenApiDefinitionOrderApi =
  | (typeof ProductOpenApiDefinitionOrderApi)[keyof typeof ProductOpenApiDefinitionOrderApi]
  | (string & {});

export const productOpenApiDefinitionOrderApiSchema: EnumSchema<ProductOpenApiDefinitionOrderApi> =
  s.enumOf<ProductOpenApiDefinitionOrderApi>(ProductOpenApiDefinitionOrderApi);
