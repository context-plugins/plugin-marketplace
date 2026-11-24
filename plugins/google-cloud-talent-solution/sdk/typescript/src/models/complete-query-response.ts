import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { completionResultSchema, type CompletionResult } from "./completion-result.js";
import { responseMetadata1Schema, type ResponseMetadata1 } from "./response-metadata1.js";

/** Response of auto-complete query. */
export type CompleteQueryResponse = {
  /** Results of the matching job/company candidates. */
  completionResults?: CompletionResult[];
  /** Additional information for the API invocation, such as the request tracking id. */
  metadata?: ResponseMetadata1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const completeQueryResponseSchema: Schema<CompleteQueryResponse> = s.object<CompleteQueryResponse>(
  {
    completionResults: s.optional(s.array(s.lazy(() => completionResultSchema))),
    metadata: s.optional(s.lazy(() => responseMetadata1Schema)),
  },
  { additionalProperties: s.json() },
);
