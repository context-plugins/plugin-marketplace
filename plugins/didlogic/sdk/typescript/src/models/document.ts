import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approvementStatus1Schema, type ApprovementStatus1 } from "./approvement-status1.js";
import { docTypeSchema, type DocType } from "./doc-type.js";
import { fileSchema, type File } from "./file.js";
import {
  identityDidlogicComKycDocumentsApiSchema,
  type IdentityDidlogicComKycDocumentsApi,
} from "./identity-didlogic-com-kyc-documents-api.js";

export type Document = {
  /** Document name */
  name: string;
  /** Document identifier */
  id: number;
  /** Owner user ID */
  userId: number;
  /**
   * Country of the document, as given at upload; for a letter of intent, the country of the
   * purchased number
   */
  country: string;
  /** Upload timestamp */
  createdAt: string;
  /** Document expiration timestamp */
  expiredAt: string;
  /** Document approval status (in review = pending, verified = approved) */
  approvementStatus: ApprovementStatus1;
  /** Document type identifier */
  docType: DocType;
  /** Associated identity ID */
  identityId: number;
  /** Identity details */
  identity: IdentityDidlogicComKycDocumentsApi;
  /** Document files */
  files: File[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentSchema: Schema<Document> = s.object<Document>(
  {
    name: s.string(),
    id: s.int(),
    userId: s.int(),
    country: s.string(),
    createdAt: s.string(),
    expiredAt: s.string(),
    approvementStatus: approvementStatus1Schema,
    docType: docTypeSchema,
    identityId: s.int(),
    identity: identityDidlogicComKycDocumentsApiSchema,
    files: s.array(s.lazy(() => fileSchema)),
    _keysMap: {
      userId: "user_id",
      createdAt: "created_at",
      expiredAt: "expired_at",
      approvementStatus: "approvement_status",
      docType: "doc_type",
      identityId: "identity_id",
    },
  },
  { additionalProperties: s.json() },
);
