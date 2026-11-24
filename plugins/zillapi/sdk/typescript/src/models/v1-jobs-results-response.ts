import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { meta1Schema, type Meta1 } from "./meta1.js";

export type V1JobsResultsResponse = {
  /**
   * Result rows. Shape depends on job type: search jobs return SearchResultRow objects;
   * batch_detail and chained_search_detail jobs return full Property (detail) objects.
   */
  data?: Record<string, unknown>[];
  meta?: Meta1;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1JobsResultsResponseSchema: Schema<V1JobsResultsResponse> = s.object<V1JobsResultsResponse>(
  {
    data: s.optional(s.array(s.record(s.string(), s.unknown()))),
    meta: s.optional(s.lazy(() => meta1Schema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
