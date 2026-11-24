import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentAttributeSchema, type AgentAttribute } from "./agent-attribute.js";
import { productTypeSchema, type ProductType } from "./product-type.js";

/** A product in the Paid system (previously called Agent) */
export type Product = {
  id: string;
  externalId?: string | null;
  /** Human-readable display ID */
  displayId?: string;
  organizationId: string;
  name: string;
  description?: string | null;
  /** The type of product */
  type: ProductType;
  active: boolean;
  productCode?: string | null;
  /** Pricing attributes for this product */
  productAttribute?: AgentAttribute[];
  metadata?: Record<string, unknown> | null;
  createdAt?: Date;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productSchema: Schema<Product> = s.object<Product>(
  {
    id: s.string(),
    externalId: s.optionalNullable(s.string()),
    displayId: s.optional(s.string()),
    organizationId: s.string(),
    name: s.string(),
    description: s.optionalNullable(s.string()),
    type: productTypeSchema,
    active: s.boolean(),
    productCode: s.optionalNullable(s.string()),
    productAttribute: s.optional(s.array(s.lazy(() => agentAttributeSchema))),
    metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      productAttribute: "ProductAttribute",
    },
  },
  { additionalProperties: s.json() },
);
