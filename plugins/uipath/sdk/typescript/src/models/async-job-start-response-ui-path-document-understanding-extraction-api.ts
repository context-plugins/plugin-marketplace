import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusUiPathDocumentUnderstandingExtractionApiSchema,
  type StatusUiPathDocumentUnderstandingExtractionApi,
} from "./status-ui-path-document-understanding-extraction-api.js";

/** Response returned when an asynchronous processing job is started */
export type AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi = {
  /** Unique identifier of the asynchronous job. Use this to poll for results. */
  requestId?: string;
  /** Initial status of the asynchronous job */
  status?: StatusUiPathDocumentUnderstandingExtractionApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const asyncJobStartResponseUiPathDocumentUnderstandingExtractionApiSchema: Schema<AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi> =
  s.object<AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi>(
    {
      requestId: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusUiPathDocumentUnderstandingExtractionApiSchema)),
    },
    { additionalProperties: s.json() },
  );
