import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A request to analyze a batch workload. */
export type AnalyzeBatchRequest = {
  /**
   * Optional. The requestor ID is used to identify if the request comes from a GCA investigation or
   * the old Ask Gemini Experience.
   *
   * @deprecated
   */
  requestorId?: string;
  /**
   * Optional. A unique ID used to identify the request. If the service receives two
   * AnalyzeBatchRequest
   * (http://cloud/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.AnalyzeBatchRequest)s
   * with the same request_id, the second request is ignored and the Operation that corresponds to
   * the first request created and stored in the backend is returned.Recommendation: Set this value
   * to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain
   * only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is
   * 40 characters.
   */
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyzeBatchRequestSchema: Schema<AnalyzeBatchRequest> = s.object<AnalyzeBatchRequest>(
  {
    requestorId: s.optional(s.string()),
    requestId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
