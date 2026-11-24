import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { base64ContentInternalSchema, base64ContentSchema, type Base64Content } from "../base64-content.js";
import { documentIdInternalSchema, documentIdSchema, type DocumentId } from "../document-id.js";
import { fileUrlInternalSchema, fileUrlSchema, type FileUrl } from "../file-url.js";

export type CreateSignatureRequest1 = Base64Content | FileUrl | DocumentId;

export const createSignatureRequest1InternalSchema: Schema<CreateSignatureRequest1> =
  s.of<CreateSignatureRequest1>(
    s.union([
      s.lazy(() => base64ContentInternalSchema),
      s.lazy(() => fileUrlInternalSchema),
      s.lazy(() => documentIdInternalSchema),
    ]),
  );

export const createSignatureRequest1Schema: Schema<CreateSignatureRequest1> = s.lazySchema(() =>
  s.of<CreateSignatureRequest1>(
    s.union([s.lazy(() => base64ContentSchema), s.lazy(() => fileUrlSchema), s.lazy(() => documentIdSchema)]),
  ),
);
