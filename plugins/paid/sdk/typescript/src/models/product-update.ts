import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentAttributeSchema, type AgentAttribute } from "./agent-attribute.js";
import { productUpdateTypeSchema, type ProductUpdateType } from "./product-update-type.js";

export type ProductUpdate = {
  name?: string;
  description?: string;
  externalId?: string;
  type?: ProductUpdateType;
  active?: boolean;
  productCode?: string;
  /** Pricing attributes for this product */
  productAttribute?: AgentAttribute[];
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productUpdateSchema: Schema<ProductUpdate> = s.object<ProductUpdate>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    externalId: s.optional(s.string()),
    type: s.optional(s.lazy(() => productUpdateTypeSchema)),
    active: s.optional(s.boolean()),
    productCode: s.optional(s.string()),
    productAttribute: s.optional(s.array(s.lazy(() => agentAttributeSchema))),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      productAttribute: "ProductAttribute",
    },
  },
  { additionalProperties: s.json() },
);
