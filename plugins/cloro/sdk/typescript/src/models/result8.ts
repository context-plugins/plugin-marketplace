import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productResult2InternalSchema,
  productResult2Schema,
  type ProductResult2,
} from "./product-result2.js";

export type Result8 = {
  /**
   * One entry: the product panel of the card that issued the token. Same shape as Google Search and
   * AI Mode `productResults`. Only `title` is always present.
   */
  productResults: ProductResult2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result8Properties: s.Shape<Result8> = {
  productResults: s.array(s.lazy(() => productResult2InternalSchema)),
};

export const result8InternalSchema: Schema<Result8> = s.object<Result8>(result8Properties, {
  additionalProperties: s.json(),
});

export const result8Schema: Schema<Result8> = s.lazySchema(() =>
  s.object<Result8>(
    {
      ...result8Properties,
      productResults: s.array(s.lazy(() => productResult2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
