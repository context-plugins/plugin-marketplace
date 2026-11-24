import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { anyData2InternalSchema, anyData2Schema, type AnyData2 } from "./any-data2.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type PriceCompareResponse = {
  /** Endpoint-specific data payload. */
  data: AnyData2;
  /** Canonical response metadata present on every 200 (§6.3.3). */
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const priceCompareResponseProperties: s.Shape<PriceCompareResponse> = {
  data: anyData2InternalSchema,
  meta: metaInternalSchema,
};

export const priceCompareResponseInternalSchema: Schema<PriceCompareResponse> =
  s.object<PriceCompareResponse>(priceCompareResponseProperties, { additionalProperties: s.json() });

export const priceCompareResponseSchema: Schema<PriceCompareResponse> = s.lazySchema(() =>
  s.object<PriceCompareResponse>(
    {
      ...priceCompareResponseProperties,
      data: anyData2Schema,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
