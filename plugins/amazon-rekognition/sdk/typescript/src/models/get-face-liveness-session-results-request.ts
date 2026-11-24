import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetFaceLivenessSessionResultsRequest = {
  /**
   * A unique 128-bit UUID. This is used to uniquely identify the session and also acts as an
   * idempotency token for all operations associated with the session.
   */
  sessionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getFaceLivenessSessionResultsRequestSchema: Schema<GetFaceLivenessSessionResultsRequest> =
  s.object<GetFaceLivenessSessionResultsRequest>(
    {
      sessionId: s.string(),
      _keysMap: {
        sessionId: "SessionId",
      },
    },
    { additionalProperties: s.json() },
  );
