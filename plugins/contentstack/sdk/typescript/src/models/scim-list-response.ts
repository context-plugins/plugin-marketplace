import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A SCIM 2.0 ListResponse container for multi-resource responses. */
export type ScimListResponse = {
  /** SCIM schema URNs identifying this as a ListResponse. */
  schemas?: string[];
  /** Total number of resources matching the query. */
  totalResults?: number;
  /** 1-based index of the first result in this page. */
  startIndex?: number;
  /** Number of results returned in this response. */
  itemsPerPage?: number;
  /** Array of SCIM resource objects (Users or Groups). */
  resources?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimListResponseSchema: Schema<ScimListResponse> = s.object<ScimListResponse>(
  {
    schemas: s.optional(s.array(s.string())),
    totalResults: s.optional(s.int()),
    startIndex: s.optional(s.int()),
    itemsPerPage: s.optional(s.int()),
    resources: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      resources: "Resources",
    },
  },
  { additionalProperties: s.json() },
);
