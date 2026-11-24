import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approvementStatus1Schema, type ApprovementStatus1 } from "./approvement-status1.js";
import { docTypeSchema, type DocType } from "./doc-type.js";
import { file1Schema, type File1 } from "./file1.js";
import {
  identityDidlogicComKycDocumentsApiSchema,
  type IdentityDidlogicComKycDocumentsApi,
} from "./identity-didlogic-com-kyc-documents-api.js";

/** Updated document details */
export type Document4 = {
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
  files: File1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const document4Schema: Schema<Document4> = s.object<Document4>(
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
    files: s.array(s.lazy(() => file1Schema)),
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
