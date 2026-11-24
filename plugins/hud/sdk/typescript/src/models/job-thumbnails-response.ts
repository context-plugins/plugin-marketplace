import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  jobThumbnailItemInternalSchema,
  jobThumbnailItemSchema,
  type JobThumbnailItem,
} from "./job-thumbnail-item.js";
import { categoryCountsSchema, type CategoryCounts } from "./unions/category-counts.js";
import { nextOffsetSchema, type NextOffset } from "./unions/next-offset.js";

export type JobThumbnailsResponse = {
  thumbnails: JobThumbnailItem[];
  nextOffset?: NextOffset;
  /** @default false */
  hasMore?: boolean;
  categoryCounts?: CategoryCounts;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobThumbnailsResponseProperties: s.Shape<JobThumbnailsResponse> = {
  thumbnails: s.array(s.lazy(() => jobThumbnailItemInternalSchema)),
  nextOffset: s.optional(s.lazy(() => nextOffsetSchema)),
  hasMore: s.defaulted(s.boolean(), false),
  categoryCounts: s.optional(s.lazy(() => categoryCountsSchema)),
  _keysMap: {
    nextOffset: "next_offset",
    hasMore: "has_more",
    categoryCounts: "category_counts",
  },
};

export const jobThumbnailsResponseInternalSchema: Schema<JobThumbnailsResponse> =
  s.object<JobThumbnailsResponse>(jobThumbnailsResponseProperties, { additionalProperties: s.json() });

export const jobThumbnailsResponseSchema: Schema<JobThumbnailsResponse> = s.lazySchema(() =>
  s.object<JobThumbnailsResponse>(
    {
      ...jobThumbnailsResponseProperties,
      thumbnails: s.array(s.lazy(() => jobThumbnailItemSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
