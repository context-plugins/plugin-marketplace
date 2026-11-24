import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRazorpayDocumentsApiSchema,
  type EntityRazorpayDocumentsApi,
} from "./entity-razorpay-documents-api.js";
import { mimeTypeSchema, type MimeType } from "./mime-type.js";

export type Document = {
  /** Unique document identifier. Example: doc_EsyWjHrfzb59Re. Always 14 alphanumeric characters. */
  id?: string;
  entity?: EntityRazorpayDocumentsApi;
  /** Filename of the uploaded document. */
  name?: string;
  /** MIME type of the uploaded file. */
  mimeType?: MimeType;
  /** File size in bytes. */
  size?: number;
  /** Upload reason. Example: dispute_evidence. */
  purpose?: string;
  /** Unix timestamp of upload. */
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentSchema: Schema<Document> = s.object<Document>(
  {
    id: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entityRazorpayDocumentsApiSchema)),
    name: s.optional(s.string()),
    mimeType: s.optional(s.lazy(() => mimeTypeSchema)),
    size: s.optional(s.int()),
    purpose: s.optional(s.string()),
    createdAt: s.optional(s.int()),
    _keysMap: {
      mimeType: "mime_type",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
