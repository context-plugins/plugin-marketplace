import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { productInternalSchema, productSchema, type Product } from "./product.js";

export type ProductSubmissionRequest = {
  /** The list of products to create or update. */
  products: Product[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const productSubmissionRequestProperties: s.Shape<ProductSubmissionRequest> = {
  products: s.array(s.lazy(() => productInternalSchema)),
};

export const productSubmissionRequestInternalSchema: Schema<ProductSubmissionRequest> =
  s.object<ProductSubmissionRequest>(productSubmissionRequestProperties, { additionalProperties: s.json() });

export const productSubmissionRequestSchema: Schema<ProductSubmissionRequest> = s.lazySchema(() =>
  s.object<ProductSubmissionRequest>(
    {
      ...productSubmissionRequestProperties,
      products: s.array(s.lazy(() => productSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
