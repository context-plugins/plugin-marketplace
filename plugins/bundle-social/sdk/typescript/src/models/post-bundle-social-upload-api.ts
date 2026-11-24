import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PostBundleSocialUploadApi = {
  postId: string;
  uploadId: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postBundleSocialUploadApiSchema: Schema<PostBundleSocialUploadApi> =
  s.object<PostBundleSocialUploadApi>(
    {
      postId: s.string(),
      uploadId: s.string(),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
      deletedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
