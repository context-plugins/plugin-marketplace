import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { multiOrderV3DataSchema, type MultiOrderV3Data } from "./multi-order-v3-data.js";
import { orderMetadataSchema, type OrderMetadata } from "./order-metadata.js";
import { statusSchema, type Status } from "./status.js";

export type PlaceOrderV3Response = {
  status?: Status;
  data?: MultiOrderV3Data;
  metadata?: OrderMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const placeOrderV3ResponseSchema: Schema<PlaceOrderV3Response> = s.object<PlaceOrderV3Response>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => multiOrderV3DataSchema)),
    metadata: s.optional(s.lazy(() => orderMetadataSchema)),
  },
  { additionalProperties: s.json() },
);
