import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Platform/product metadata used by product listing endpoints. */
export type ProductApi = {
  displayName?: string;
  id?: string;
  platform?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productApiSchema: Schema<ProductApi> = s.object<ProductApi>(
  {
    displayName: s.optional(s.string()),
    id: s.optional(s.string()),
    platform: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
