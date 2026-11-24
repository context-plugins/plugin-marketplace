import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetApiV1ResultsResultidResponse = {
  /** HTTP status returned by the MrScraper service. */
  statusCode?: number;
  /** Parsed JSON or response text supplied by the service. */
  data?: Record<string, unknown>;
  /** Response headers with credential-bearing headers filtered out. */
  headers?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getApiV1ResultsResultidResponseSchema: Schema<GetApiV1ResultsResultidResponse> =
  s.object<GetApiV1ResultsResultidResponse>(
    {
      statusCode: s.optional(s.int()),
      data: s.optional(s.record(s.string(), s.unknown())),
      headers: s.optional(s.record(s.string(), s.unknown())),
      _keysMap: {
        statusCode: "status_code",
      },
    },
    { additionalProperties: s.json() },
  );
