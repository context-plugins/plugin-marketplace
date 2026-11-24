import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1UploadFinalizeRequest = {
  teamId?: string | null;
  path: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1UploadFinalizeRequestSchema: Schema<ApiV1UploadFinalizeRequest> =
  s.object<ApiV1UploadFinalizeRequest>(
    {
      teamId: s.optionalNullable(s.string()),
      path: s.string(),
    },
    { additionalProperties: s.json() },
  );
