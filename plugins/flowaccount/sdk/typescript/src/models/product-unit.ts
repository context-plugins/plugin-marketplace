import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProductUnit = {
  id?: number;
  name: string;
  isShare?: boolean;
  isDelete?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const productUnitProperties: s.Shape<ProductUnit> = {
  id: s.optional(s.int()),
  name: s.string(),
  isShare: s.optional(s.boolean()),
  isDelete: s.optional(s.boolean()),
};

export const productUnitInternalSchema: Schema<ProductUnit> = s.object<ProductUnit>(productUnitProperties, {
  additionalProperties: s.json(),
});

export const productUnitSchema: Schema<ProductUnit> = s.lazySchema(() =>
  s.object<ProductUnit>(
    {
      ...productUnitProperties,
      name: s.string().check(s.minLength(0), s.maxLength(255)),
    },
    { additionalProperties: s.json() },
  ),
);
