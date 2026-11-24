import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Structured product lookup query data */
export type ProductLookupData = {
  /** Search query used for this product */
  requestQuery?: string;
  /** Provider-to-ID mapping */
  allIds?: Record<string, unknown>;
  metadataSources?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productLookupDataSchema: Schema<ProductLookupData> = s.object<ProductLookupData>(
  {
    requestQuery: s.optional(s.string()),
    allIds: s.optional(s.record(s.string(), s.unknown())),
    metadataSources: s.optional(s.array(s.string())),
    _keysMap: {
      requestQuery: "request_query",
      allIds: "all_ids",
      metadataSources: "metadata_sources",
    },
  },
  { additionalProperties: s.json() },
);
