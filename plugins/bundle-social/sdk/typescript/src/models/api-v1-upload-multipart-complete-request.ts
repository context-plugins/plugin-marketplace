import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { part2InternalSchema, part2Schema, type Part2 } from "./part2.js";

export type ApiV1UploadMultipartCompleteRequest = {
  teamId?: string | null;
  parts: Part2[];
  path: string;
  uploadId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1UploadMultipartCompleteRequestProperties: s.Shape<ApiV1UploadMultipartCompleteRequest> = {
  teamId: s.optionalNullable(s.string()),
  parts: s.array(s.lazy(() => part2InternalSchema)),
  path: s.string(),
  uploadId: s.string(),
};

export const apiV1UploadMultipartCompleteRequestInternalSchema: Schema<ApiV1UploadMultipartCompleteRequest> =
  s.object<ApiV1UploadMultipartCompleteRequest>(apiV1UploadMultipartCompleteRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1UploadMultipartCompleteRequestSchema: Schema<ApiV1UploadMultipartCompleteRequest> =
  s.lazySchema(() =>
    s.object<ApiV1UploadMultipartCompleteRequest>(
      {
        ...apiV1UploadMultipartCompleteRequestProperties,
        parts: s.array(s.lazy(() => part2Schema)).check(s.minLength(1), s.maxLength(10000)),
      },
      { additionalProperties: s.json() },
    ),
  );
