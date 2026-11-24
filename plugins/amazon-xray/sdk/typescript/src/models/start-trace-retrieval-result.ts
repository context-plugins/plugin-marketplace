import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartTraceRetrievalResult = {
  /** Retrieval token. */
  retrievalToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTraceRetrievalResultSchema: Schema<StartTraceRetrievalResult> =
  s.object<StartTraceRetrievalResult>(
    {
      retrievalToken: s.optional(s.string()),
      _keysMap: {
        retrievalToken: "RetrievalToken",
      },
    },
    { additionalProperties: s.json() },
  );
