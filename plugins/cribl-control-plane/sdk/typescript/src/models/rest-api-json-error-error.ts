import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * JSON body returned for many REST failures that use RESTEndpoint.sendError (and similar handlers).
 */
export type RestApiJsonErrorError = {
  /** Optional structured details about the error (e.g. validation failures). */
  details?: Record<string, unknown>;
  /** Human-readable message or serialized validation details for the error. */
  message: string;
  /** Always <code>error</code> for API error responses. @default "error" */
  status?: "error";
};

export const restApiJsonErrorErrorSchema: Schema<RestApiJsonErrorError> = s.object<RestApiJsonErrorError>({
  details: s.optional(s.record(s.string(), s.unknown())),
  message: s.string(),
  status: s.defaulted(s.literal("error"), "error"),
});
