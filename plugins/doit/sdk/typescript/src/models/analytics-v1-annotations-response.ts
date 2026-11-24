import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { annotationListItemSchema, type AnnotationListItem } from "./annotation-list-item.js";

export type AnalyticsV1AnnotationsResponse = {
  /** Page token, returned by a previous call, to request the next page of results */
  pageToken?: string;
  /** Total number of annotations in the result set */
  rowCount?: number;
  annotations?: AnnotationListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsV1AnnotationsResponseSchema: Schema<AnalyticsV1AnnotationsResponse> =
  s.object<AnalyticsV1AnnotationsResponse>(
    {
      pageToken: s.optional(s.string()),
      rowCount: s.optional(s.int()),
      annotations: s.optional(s.array(s.lazy(() => annotationListItemSchema))),
    },
    { additionalProperties: s.json() },
  );
