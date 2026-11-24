import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  auctionLocationInternalSchema,
  auctionLocationSchema,
  type AuctionLocation,
} from "./auction-location.js";
import { cursorMetaInternalSchema, cursorMetaSchema, type CursorMeta } from "./cursor-meta.js";

export type LocationsResponse = {
  data: AuctionLocation[];
  /** Cursor pagination metadata. */
  meta: CursorMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const locationsResponseProperties: s.Shape<LocationsResponse> = {
  data: s.array(s.lazy(() => auctionLocationInternalSchema)),
  meta: cursorMetaInternalSchema,
};

export const locationsResponseInternalSchema: Schema<LocationsResponse> = s.object<LocationsResponse>(
  locationsResponseProperties,
  { additionalProperties: s.json() },
);

export const locationsResponseSchema: Schema<LocationsResponse> = s.lazySchema(() =>
  s.object<LocationsResponse>(
    {
      ...locationsResponseProperties,
      data: s.array(s.lazy(() => auctionLocationSchema)),
      meta: cursorMetaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
