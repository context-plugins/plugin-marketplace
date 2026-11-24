import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";
import { propertyInternalSchema, propertySchema, type Property } from "./property.js";

export type SearchResponse = {
  /** Endpoint-specific data payload. */
  data: Property[];
  /** Canonical response metadata present on every 200 (§6.3.3). */
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchResponseProperties: s.Shape<SearchResponse> = {
  data: s.array(s.lazy(() => propertyInternalSchema)),
  meta: metaInternalSchema,
};

export const searchResponseInternalSchema: Schema<SearchResponse> = s.object<SearchResponse>(
  searchResponseProperties,
  { additionalProperties: s.json() },
);

export const searchResponseSchema: Schema<SearchResponse> = s.lazySchema(() =>
  s.object<SearchResponse>(
    {
      ...searchResponseProperties,
      data: s.array(s.lazy(() => propertySchema)),
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
