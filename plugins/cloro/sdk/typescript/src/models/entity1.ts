import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { shoppingProduct2Schema, type ShoppingProduct2 } from "./shopping-product2.js";

export type Entity1 = {
  /** Entity type identifier */
  type: string;
  /** Entity name */
  name: string;
  /**
   * The product listing that ChatGPT attached to the entity, without `position`. Present only with
   * `include.shopping: true`, and only when ChatGPT attached a listing. The listing of a gpt-6
   * product card is in `inlineProducts` instead.
   */
  product?: ShoppingProduct2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entity1Schema: Schema<Entity1> = s.object<Entity1>(
  {
    type: s.string(),
    name: s.string(),
    product: s.optional(s.lazy(() => shoppingProduct2Schema)),
  },
  { additionalProperties: s.json() },
);
