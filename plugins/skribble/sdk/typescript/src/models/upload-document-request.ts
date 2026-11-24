import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UploadDocumentRequest = {
  /** Title of the document. */
  title: string;
  /** Give specific users or API keys read access to this document. */
  readAccess?: string[];
  /** Give specific users or API keys write access to this document. */
  writeAccess?: string[];
  /** Base64 encoded bytes of the document. */
  content: string;
  /** Content type of bytes sent in content. Currently, only application/pdf is supported. */
  contentType?: string;
  /** Publicly accessible URL for document download. */
  fileUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const uploadDocumentRequestProperties: s.Shape<UploadDocumentRequest> = {
  title: s.string(),
  readAccess: s.optional(s.array(s.string())),
  writeAccess: s.optional(s.array(s.string())),
  content: s.string(),
  contentType: s.optional(s.string()),
  fileUrl: s.string(),
  _keysMap: {
    readAccess: "read_access",
    writeAccess: "write_access",
    contentType: "content_type",
    fileUrl: "file_url",
  },
};

export const uploadDocumentRequestInternalSchema: Schema<UploadDocumentRequest> =
  s.object<UploadDocumentRequest>(uploadDocumentRequestProperties, { additionalProperties: s.json() });

export const uploadDocumentRequestSchema: Schema<UploadDocumentRequest> = s.lazySchema(() =>
  s.object<UploadDocumentRequest>(
    {
      ...uploadDocumentRequestProperties,
      fileUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
