import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessLocationResponse = {
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessLocationResponseSchema: Schema<ApiV1MiscGoogleBusinessLocationResponse> =
  s.object<ApiV1MiscGoogleBusinessLocationResponse>(
    {
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
