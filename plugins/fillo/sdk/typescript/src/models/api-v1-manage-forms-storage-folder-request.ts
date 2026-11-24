import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageFormsStorageFolderRequest = {
  /** A Google Drive folder id. */
  folderId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageFormsStorageFolderRequestProperties: s.Shape<ApiV1ManageFormsStorageFolderRequest> = {
  folderId: s.string(),
};

export const apiV1ManageFormsStorageFolderRequestInternalSchema: Schema<ApiV1ManageFormsStorageFolderRequest> =
  s.object<ApiV1ManageFormsStorageFolderRequest>(apiV1ManageFormsStorageFolderRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageFormsStorageFolderRequestSchema: Schema<ApiV1ManageFormsStorageFolderRequest> =
  s.lazySchema(() =>
    s.object<ApiV1ManageFormsStorageFolderRequest>(
      {
        ...apiV1ManageFormsStorageFolderRequestProperties,
        folderId: s.string().check(s.pattern("^[A-Za-z0-9_-]{10,200}$")),
      },
      { additionalProperties: s.json() },
    ),
  );
