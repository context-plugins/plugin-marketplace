import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { discoveryItemInternalSchema, discoveryItemSchema, type DiscoveryItem } from "./discovery-item.js";

export type DiscoveryRequest = {
  /** Up to 500 accounts per bulk request */
  data: DiscoveryItem[];
  externalBulkId?: string;
  /** URL Leadspace calls back when bulk processing completes */
  callbackUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const discoveryRequestProperties: s.Shape<DiscoveryRequest> = {
  data: s.array(s.lazy(() => discoveryItemInternalSchema)),
  externalBulkId: s.optional(s.string()),
  callbackUrl: s.optional(s.string()),
  _keysMap: {
    externalBulkId: "external_bulk_id",
  },
};

export const discoveryRequestInternalSchema: Schema<DiscoveryRequest> = s.object<DiscoveryRequest>(
  discoveryRequestProperties,
  { additionalProperties: s.json() },
);

export const discoveryRequestSchema: Schema<DiscoveryRequest> = s.lazySchema(() =>
  s.object<DiscoveryRequest>(
    {
      ...discoveryRequestProperties,
      data: s.array(s.lazy(() => discoveryItemSchema)).check(s.maxLength(500)),
    },
    { additionalProperties: s.json() },
  ),
);
