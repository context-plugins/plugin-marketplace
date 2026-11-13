import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FileUrlResponse = {
  /** Name of the exported template file. */
  fileName: string;
  /** Publicly accessible URL of the stored template CSV. No expiry is set. */
  fileUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fileUrlResponseProperties: s.Shape<FileUrlResponse> = {
  fileName: s.string(),
  fileUrl: s.string(),
  _keysMap: {
    fileName: "file_name",
    fileUrl: "file_url",
  },
};

export const fileUrlResponseInternalSchema: Schema<FileUrlResponse> = s.object<FileUrlResponse>(
  fileUrlResponseProperties,
  { additionalProperties: s.json() },
);

export const fileUrlResponseSchema: Schema<FileUrlResponse> = s.lazySchema(() =>
  s.object<FileUrlResponse>(
    {
      ...fileUrlResponseProperties,
      fileUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
