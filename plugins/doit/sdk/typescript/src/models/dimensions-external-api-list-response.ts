import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dimensionExternalApiListItemSchema,
  type DimensionExternalApiListItem,
} from "./dimension-external-api-list-item.js";

/** Paged list of available dimensions. */
export type DimensionsExternalApiListResponse = {
  /** Array of dimensions. */
  dimensions?: DimensionExternalApiListItem[];
  pageToken?: string;
  rowCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dimensionsExternalApiListResponseSchema: Schema<DimensionsExternalApiListResponse> =
  s.object<DimensionsExternalApiListResponse>(
    {
      dimensions: s.optional(s.array(s.lazy(() => dimensionExternalApiListItemSchema))),
      pageToken: s.optional(s.string()),
      rowCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
