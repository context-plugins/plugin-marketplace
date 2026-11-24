import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1UploadInitResponse = {
  url: string;
  path: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1UploadInitResponseSchema: Schema<ApiV1UploadInitResponse> =
  s.object<ApiV1UploadInitResponse>(
    {
      url: s.string(),
      path: s.string(),
    },
    { additionalProperties: s.json() },
  );
