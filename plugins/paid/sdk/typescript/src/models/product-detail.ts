import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { productAttributeOutputSchema, type ProductAttributeOutput } from "./product-attribute-output.js";

export type ProductDetail = {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
  productCode: string | null;
  externalId: string | null;
  archivedAt: Date | null;
  metadata: Record<string, unknown> | null;
  productAttributes: ProductAttributeOutput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productDetailSchema: Schema<ProductDetail> = s.object<ProductDetail>(
  {
    id: s.string(),
    name: s.string(),
    description: s.nullable(s.string()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    active: s.boolean(),
    productCode: s.nullable(s.string()),
    externalId: s.nullable(s.string()),
    archivedAt: s.nullable(s.dateTime()),
    metadata: s.nullable(s.record(s.string(), s.unknown())),
    productAttributes: s.array(s.lazy(() => productAttributeOutputSchema)),
  },
  { additionalProperties: s.json() },
);
