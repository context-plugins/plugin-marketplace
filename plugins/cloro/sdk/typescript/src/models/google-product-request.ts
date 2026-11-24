import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GoogleProductRequest = {
  /**
   * The `productResultToken` from a Google Search shopping card, or from a Google AI Mode shopping
   * card or inline product. The token carries the query, locale and location of the request that
   * issued it, so the request takes no other field.
   */
  productResultToken: string;
};

const googleProductRequestProperties: s.Shape<GoogleProductRequest> = {
  productResultToken: s.string(),
};

export const googleProductRequestInternalSchema: Schema<GoogleProductRequest> =
  s.object<GoogleProductRequest>(googleProductRequestProperties);

export const googleProductRequestSchema: Schema<GoogleProductRequest> = s.lazySchema(() =>
  s.object<GoogleProductRequest>({
    ...googleProductRequestProperties,
    productResultToken: s.string().check(s.minLength(1), s.maxLength(512)),
  }),
);
