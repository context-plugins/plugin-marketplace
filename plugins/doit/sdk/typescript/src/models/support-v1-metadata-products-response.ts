import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { productApiSchema, type ProductApi } from "./product-api.js";

export type SupportV1MetadataProductsResponse = {
  products?: ProductApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const supportV1MetadataProductsResponseSchema: Schema<SupportV1MetadataProductsResponse> =
  s.object<SupportV1MetadataProductsResponse>(
    {
      products: s.optional(s.array(s.lazy(() => productApiSchema))),
    },
    { additionalProperties: s.json() },
  );
