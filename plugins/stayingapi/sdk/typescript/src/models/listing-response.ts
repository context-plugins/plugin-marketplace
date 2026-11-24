import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { anyDataInternalSchema, anyDataSchema, type AnyData } from "./any-data.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type ListingResponse = {
  /** Endpoint-specific data payload. */
  data: AnyData;
  /** Canonical response metadata present on every 200 (§6.3.3). */
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listingResponseProperties: s.Shape<ListingResponse> = {
  data: anyDataInternalSchema,
  meta: metaInternalSchema,
};

export const listingResponseInternalSchema: Schema<ListingResponse> = s.object<ListingResponse>(
  listingResponseProperties,
  { additionalProperties: s.json() },
);

export const listingResponseSchema: Schema<ListingResponse> = s.lazySchema(() =>
  s.object<ListingResponse>(
    {
      ...listingResponseProperties,
      data: anyDataSchema,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
