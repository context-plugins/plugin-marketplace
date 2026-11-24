import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approvementStatus1Schema, type ApprovementStatus1 } from "./approvement-status1.js";
import { file1Schema, type File1 } from "./file1.js";

export type Document2 = {
  /** Document name */
  name: string;
  /** Document identifier */
  id: number;
  userId: number;
  /**
   * Country of the document, as given at upload; for a letter of intent, the country of the
   * purchased number
   */
  country: string;
  createdAt: string;
  expiredAt: string;
  /** Document approval status (in review = pending, verified = approved) */
  approvementStatus: ApprovementStatus1;
  /** Document type identifier */
  docType: string;
  identityId: Record<string, unknown>;
  identity: Record<string, unknown>;
  /** Uploaded document files */
  files: File1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const document2Schema: Schema<Document2> = s.object<Document2>(
  {
    name: s.string(),
    id: s.int(),
    userId: s.int(),
    country: s.string(),
    createdAt: s.string(),
    expiredAt: s.string(),
    approvementStatus: approvementStatus1Schema,
    docType: s.string(),
    identityId: s.record(s.string(), s.unknown()),
    identity: s.record(s.string(), s.unknown()),
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
