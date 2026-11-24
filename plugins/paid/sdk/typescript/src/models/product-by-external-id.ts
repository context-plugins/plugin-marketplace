import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProductByExternalId = {
  /** Your external product ID */
  externalProductId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productByExternalIdSchema: Schema<ProductByExternalId> = s.object<ProductByExternalId>(
  {
    externalProductId: s.string(),
  },
  { additionalProperties: s.json() },
);
