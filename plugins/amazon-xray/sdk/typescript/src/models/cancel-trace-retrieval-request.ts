import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelTraceRetrievalRequest = {
  /** Retrieval token. */
  retrievalToken: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelTraceRetrievalRequestSchema: Schema<CancelTraceRetrievalRequest> =
  s.object<CancelTraceRetrievalRequest>(
    {
      retrievalToken: s.string(),
      _keysMap: {
        retrievalToken: "RetrievalToken",
      },
    },
    { additionalProperties: s.json() },
  );
