import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1IngestChunkHtmlResponse = {
  chunks?: string[];
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1IngestChunkHtmlResponseSchema: Schema<ApiV1IngestChunkHtmlResponse> =
  s.object<ApiV1IngestChunkHtmlResponse>(
    {
      chunks: s.optional(s.array(s.string())),
      usage: s.optional(s.lazy(() => usageSchema)),
    },
    { additionalProperties: s.json() },
  );
