import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { updateTierPriceRequestSchema, type UpdateTierPriceRequest } from "./update-tier-price-request.js";

export type PublicationsTiersRequest1 = {
  name?: string;
  description?: string;
  pricesAttributes?: UpdateTierPriceRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsTiersRequest1Schema: Schema<PublicationsTiersRequest1> =
  s.object<PublicationsTiersRequest1>(
    {
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      pricesAttributes: s.optional(s.array(s.lazy(() => updateTierPriceRequestSchema))),
      _keysMap: {
        pricesAttributes: "prices_attributes",
      },
    },
    { additionalProperties: s.json() },
  );
