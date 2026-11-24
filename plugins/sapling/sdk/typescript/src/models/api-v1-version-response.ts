import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1VersionResponse = {
  build?: string;
  version?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1VersionResponseSchema: Schema<ApiV1VersionResponse> = s.object<ApiV1VersionResponse>(
  {
    build: s.optional(s.string()),
    version: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
