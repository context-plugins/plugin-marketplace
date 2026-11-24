import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GoogleProductRequest2 = {
  /**
   * The `productResultToken` from a Google Search shopping card or AI Overview inline product, or
   * from a Google AI Mode shopping card or inline product. The token carries the query, locale and
   * location of the request that issued it, so the request takes no other field.
   */
  productResultToken: string;
};

const googleProductRequest2Properties: s.Shape<GoogleProductRequest2> = {
  productResultToken: s.string(),
};

export const googleProductRequest2InternalSchema: Schema<GoogleProductRequest2> =
  s.object<GoogleProductRequest2>(googleProductRequest2Properties);

export const googleProductRequest2Schema: Schema<GoogleProductRequest2> = s.lazySchema(() =>
  s.object<GoogleProductRequest2>({
    ...googleProductRequest2Properties,
    productResultToken: s.string().check(s.minLength(1), s.maxLength(512)),
  }),
);
