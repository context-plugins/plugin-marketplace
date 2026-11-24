import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessLocationServiceListResponse = {
  name?: string;
  serviceItems?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessLocationServiceListResponseSchema: Schema<ApiV1MiscGoogleBusinessLocationServiceListResponse> =
  s.object<ApiV1MiscGoogleBusinessLocationServiceListResponse>(
    {
      name: s.optional(s.string()),
      serviceItems: s.optional(s.array(s.record(s.string(), s.unknown()))),
    },
    { additionalProperties: s.json() },
  );
