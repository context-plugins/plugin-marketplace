import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  documentSaplingGenerationApiSchema,
  type DocumentSaplingGenerationApi,
} from "./document-sapling-generation-api.js";
import { lengthSchema, type Length } from "./length.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1FileSummarizeResponse = {
  document?: DocumentSaplingGenerationApi;
  keyPoints?: string[];
  length?: Length;
  /** Same as `summary` (legacy key). */
  result?: string;
  summary?: string;
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1FileSummarizeResponseSchema: Schema<ApiV1FileSummarizeResponse> =
  s.object<ApiV1FileSummarizeResponse>(
    {
      document: s.optional(s.lazy(() => documentSaplingGenerationApiSchema)),
      keyPoints: s.optional(s.array(s.string())),
      length: s.optional(s.lazy(() => lengthSchema)),
      result: s.optional(s.string()),
      summary: s.optional(s.string()),
      usage: s.optional(s.lazy(() => usageSchema)),
      _keysMap: {
        keyPoints: "key_points",
      },
    },
    { additionalProperties: s.json() },
  );
