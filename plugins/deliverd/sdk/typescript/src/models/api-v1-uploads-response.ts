import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1UploadsResponse = {
  uploadId: string;
  uploadUrl: string;
  /** @default "PUT" */
  method?: "PUT";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1UploadsResponseSchema: Schema<ApiV1UploadsResponse> = s.object<ApiV1UploadsResponse>(
  {
    uploadId: s.string(),
    uploadUrl: s.string(),
    method: s.defaulted(s.literal("PUT"), "PUT"),
  },
  { additionalProperties: s.json() },
);
