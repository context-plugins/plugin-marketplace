import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signatureFormfieldSchema, type SignatureFormfield } from "./signature-formfield.js";

/** Document object Response. */
export type DocumentResponse = {
  id?: string;
  /**
   * ID of the previous version of the Document object. As documents are immutable, every change
   * will create a new version, which is connected by the parent_id.
   */
  parentId?: string;
  title?: string;
  contentType?: string;
  size?: number;
  pageCount?: number;
  pageWidth?: number;
  pageHeight?: number;
  /** Optional detected Signature Formfields */
  signatureFields?: SignatureFormfield[];
  owner?: string;
  /** Users or API keys with read access to this document. */
  readAccess?: string[];
  /** Users or API keys with write access to this document. */
  writeAccess?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentResponseSchema: Schema<DocumentResponse> = s.object<DocumentResponse>(
  {
    id: s.optional(s.string()),
    parentId: s.optional(s.string()),
    title: s.optional(s.string()),
    contentType: s.optional(s.string()),
    size: s.optional(s.int()),
    pageCount: s.optional(s.int()),
    pageWidth: s.optional(s.int()),
    pageHeight: s.optional(s.int()),
    signatureFields: s.optional(s.array(s.lazy(() => signatureFormfieldSchema))),
    owner: s.optional(s.string()),
    readAccess: s.optional(s.array(s.string())),
    writeAccess: s.optional(s.array(s.string())),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      parentId: "parent_id",
      contentType: "content_type",
      pageCount: "page_count",
      pageWidth: "page_width",
      pageHeight: "page_height",
      signatureFields: "signature_fields",
      readAccess: "read_access",
      writeAccess: "write_access",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
