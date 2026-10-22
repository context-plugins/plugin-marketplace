import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productNameSchema, type ProductName } from "./product-name.js";
import { productRoleSchema, type ProductRole } from "./product-role.js";

export type ProductRoleSchema = {
  /** Product name. */
  product: ProductName;
  /** Role assigned to the API Credential on the product. */
  role: ProductRole;
};

export const productRoleSchemaSchema: Schema<ProductRoleSchema> = s.object<ProductRoleSchema>({
  product: productNameSchema,
  role: productRoleSchema,
});
