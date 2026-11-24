import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";

export type LocationAssociation = {
  category?: Category;
  priceListItemId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationAssociationSchema: Schema<LocationAssociation> = s.object<LocationAssociation>(
  {
    category: s.optional(s.lazy(() => categorySchema)),
    priceListItemId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
