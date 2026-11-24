import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Describes the class(type) of accounts. - transaction - savings - credit-card - mortgage - loan -
 * investment - term-deposit - insurance - foreign - unknown
 */
export type Class1 = {
  /** Account type */
  type: string;
  /** Product name. */
  product: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const class1Schema: Schema<Class1> = s.object<Class1>(
  {
    type: s.string(),
    product: s.string(),
  },
  { additionalProperties: s.json() },
);
