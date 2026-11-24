import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { anyData1InternalSchema, anyData1Schema, type AnyData1 } from "./any-data1.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type PriceResponse = {
  /** Endpoint-specific data payload. */
  data: AnyData1;
  /** Canonical response metadata present on every 200 (§6.3.3). */
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const priceResponseProperties: s.Shape<PriceResponse> = {
  data: anyData1InternalSchema,
  meta: metaInternalSchema,
};

export const priceResponseInternalSchema: Schema<PriceResponse> = s.object<PriceResponse>(
  priceResponseProperties,
  { additionalProperties: s.json() },
);

export const priceResponseSchema: Schema<PriceResponse> = s.lazySchema(() =>
  s.object<PriceResponse>(
    {
      ...priceResponseProperties,
      data: anyData1Schema,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
