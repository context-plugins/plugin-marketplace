import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { segmentSchema, type Segment } from "./segment.js";

export type SegmentsListResponse = {
  /** An array of all segments. */
  data: Segment[];
  /**
   * The limit placed on the results. If no limit was specified in the request,this defaults to 10.
   */
  limit: number;
  /**
   * The page number the results are from. If no page was specified in the request, this defaults to
   * page 1.
   *
   * @default 1
   */
  page?: number;
  /** The total number of results from all pages. */
  totalResults: number;
  /** The total number of pages. */
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentsListResponseSchema: Schema<SegmentsListResponse> = s.object<SegmentsListResponse>(
  {
    data: s.array(s.lazy(() => segmentSchema)),
    limit: s.int(),
    page: s.defaulted(s.int(), 1),
    totalResults: s.int(),
    totalPages: s.int(),
    _keysMap: {
      totalResults: "total_results",
      totalPages: "total_pages",
    },
  },
  { additionalProperties: s.json() },
);
