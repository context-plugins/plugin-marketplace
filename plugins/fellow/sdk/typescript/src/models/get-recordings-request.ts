import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  mediaUrlConfigInternalSchema,
  mediaUrlConfigSchema,
  type MediaUrlConfig,
} from "./media-url-config.js";
import {
  paginatedRequestParamsInternalSchema,
  paginatedRequestParamsSchema,
  type PaginatedRequestParams,
} from "./paginated-request-params.js";
import { recordingFiltersSchema, type RecordingFilters } from "./recording-filters.js";
import {
  recordingIncludableExpensiveFieldSchema,
  type RecordingIncludableExpensiveField,
} from "./recording-includable-expensive-field.js";

/** Request body for getting recordings with optional filters and pagination. */
export type GetRecordingsRequest = {
  pagination?: PaginatedRequestParams;
  include?: RecordingIncludableExpensiveField;
  filters?: RecordingFilters;
  mediaUrl?: MediaUrlConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const getRecordingsRequestProperties: s.Shape<GetRecordingsRequest> = {
  pagination: s.optional(s.lazy(() => paginatedRequestParamsInternalSchema)),
  include: s.optional(s.lazy(() => recordingIncludableExpensiveFieldSchema)),
  filters: s.optional(s.lazy(() => recordingFiltersSchema)),
  mediaUrl: s.optional(s.lazy(() => mediaUrlConfigInternalSchema)),
  _keysMap: {
    mediaUrl: "media_url",
  },
};

export const getRecordingsRequestInternalSchema: Schema<GetRecordingsRequest> =
  s.object<GetRecordingsRequest>(getRecordingsRequestProperties, { additionalProperties: s.json() });

export const getRecordingsRequestSchema: Schema<GetRecordingsRequest> = s.lazySchema(() =>
  s.object<GetRecordingsRequest>(
    {
      ...getRecordingsRequestProperties,
      pagination: s.optional(s.lazy(() => paginatedRequestParamsSchema)),
      mediaUrl: s.optional(s.lazy(() => mediaUrlConfigSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
