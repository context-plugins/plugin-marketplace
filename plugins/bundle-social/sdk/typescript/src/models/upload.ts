import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { upload1InternalSchema, upload1Schema, type Upload1 } from "./upload1.js";

export type Upload = {
  postId: string;
  uploadId: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  upload: Upload1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const uploadProperties: s.Shape<Upload> = {
  postId: s.string(),
  uploadId: s.string(),
  createdAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
  deletedAt: s.optionalNullable(s.dateTime()),
  upload: upload1InternalSchema,
};

export const uploadInternalSchema: Schema<Upload> = s.object<Upload>(uploadProperties, {
  additionalProperties: s.json(),
});

export const uploadSchema: Schema<Upload> = s.lazySchema(() =>
  s.object<Upload>(
    {
      ...uploadProperties,
      upload: upload1Schema,
    },
    { additionalProperties: s.json() },
  ),
);
