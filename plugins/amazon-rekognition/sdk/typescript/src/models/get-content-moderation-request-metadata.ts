import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aggregateBy1Schema, type AggregateBy1 } from "./aggregate-by1.js";
import { sortBy1Schema, type SortBy1 } from "./sort-by1.js";

export type GetContentModerationRequestMetadata = {
  /** The sorting method chosen for a GetContentModeration request. */
  sortBy?: SortBy1;
  /** The aggregation method chosen for a GetContentModeration request. */
  aggregateBy?: AggregateBy1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getContentModerationRequestMetadataSchema: Schema<GetContentModerationRequestMetadata> =
  s.object<GetContentModerationRequestMetadata>(
    {
      sortBy: s.optional(s.lazy(() => sortBy1Schema)),
      aggregateBy: s.optional(s.lazy(() => aggregateBy1Schema)),
      _keysMap: {
        sortBy: "SortBy",
        aggregateBy: "AggregateBy",
      },
    },
    { additionalProperties: s.json() },
  );
