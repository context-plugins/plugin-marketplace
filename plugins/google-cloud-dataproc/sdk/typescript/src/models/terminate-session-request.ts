import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A request to terminate an interactive session. */
export type TerminateSessionRequest = {
  /**
   * Optional. A unique ID used to identify the request. If the service receives two
   * TerminateSessionRequest
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.TerminateSessionRequest)s
   * with the same ID, the second request is ignored.Recommendation: Set this value to a UUID
   * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The value must contain only
   * letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
   * characters.
   */
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const terminateSessionRequestSchema: Schema<TerminateSessionRequest> =
  s.object<TerminateSessionRequest>(
    {
      requestId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
