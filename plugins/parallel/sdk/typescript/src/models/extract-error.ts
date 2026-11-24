import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentParallelAiExtractApiSchema,
  type ContentParallelAiExtractApi,
} from "./unions/content-parallel-ai-extract-api.js";
import { httpStatusCodeSchema, type HttpStatusCode } from "./unions/http-status-code.js";

/** Extract error details. */
export type ExtractError = {
  url: string;
  /** Error type. */
  errorType: string;
  /** HTTP status code, if available. */
  httpStatusCode: HttpStatusCode;
  /** Content returned for http client or server errors, if any. */
  content: ContentParallelAiExtractApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extractErrorSchema: Schema<ExtractError> = s.object<ExtractError>(
  {
    url: s.string(),
    errorType: s.string(),
    httpStatusCode: httpStatusCodeSchema,
    content: contentParallelAiExtractApiSchema,
    _keysMap: {
      errorType: "error_type",
      httpStatusCode: "http_status_code",
    },
  },
  { additionalProperties: s.json() },
);
