import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * JSON body returned for many REST failures that use RESTEndpoint.sendError (and similar handlers).
 */
export type RestApiJsonError = {
  /** Optional structured details about the error (e.g. validation failures). */
  details?: Record<string, unknown>;
  /** Human-readable message or serialized validation details for the error. */
  message: string;
  /** Always <code>error</code> for API error responses. @default "error" */
  status?: "error";
};

export const restApiJsonErrorSchema: Schema<RestApiJsonError> = s.object<RestApiJsonError>({
  details: s.optional(s.record(s.string(), s.unknown())),
  message: s.string(),
  status: s.defaulted(s.literal("error"), "error"),
});
