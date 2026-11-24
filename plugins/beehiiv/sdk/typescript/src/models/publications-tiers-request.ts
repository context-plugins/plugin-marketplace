import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  tierPricesAttributesItemSchema,
  type TierPricesAttributesItem,
} from "./tier-prices-attributes-item.js";

export type PublicationsTiersRequest = {
  name: string;
  description?: string;
  pricesAttributes?: TierPricesAttributesItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsTiersRequestSchema: Schema<PublicationsTiersRequest> =
  s.object<PublicationsTiersRequest>(
    {
      name: s.string(),
      description: s.optional(s.string()),
      pricesAttributes: s.optional(s.array(s.lazy(() => tierPricesAttributesItemSchema))),
      _keysMap: {
        pricesAttributes: "prices_attributes",
      },
    },
    { additionalProperties: s.json() },
  );
