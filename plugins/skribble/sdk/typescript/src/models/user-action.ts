import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";

export type UserAction = {
  name: string;
  ip?: string | null;
  time: string;
  quality?: string | null;
  legislation?: string | null;
  documentId?: string | null;
  documentSha256?: string | null;
  /** @default 0 */
  documentPageCount?: number;
  /** @default 0 */
  documentSize?: number;
  documents?: Document[];
  message?: string | null;
  signatureId?: string | null;
  signersAdded?: string[];
  signersRemoved?: string[];
  observersAdded?: string[];
  observersRemoved?: string[];
  delegatees?: string[];
  delegatedSignatureId?: string | null;
  newSignatureIds?: string[];
  certificateSubject?: string | null;
  certificateSerial?: string | null;
  certificateIssuer?: string | null;
  signatureImage?: string | null;
  signerGroupsAdded?: string[];
  signerGroupsRemoved?: string[];
  signerGroupName?: string | null;
  mabEvidenceId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userActionProperties: s.Shape<UserAction> = {
  name: s.string(),
  ip: s.optionalNullable(s.string()),
  time: s.string(),
  quality: s.optionalNullable(s.string()),
  legislation: s.optionalNullable(s.string()),
  documentId: s.optionalNullable(s.string()),
  documentSha256: s.optionalNullable(s.string()),
  documentPageCount: s.defaulted(s.int(), 0),
  documentSize: s.defaulted(s.int(), 0),
  documents: s.optional(s.array(s.lazy(() => documentSchema))),
  message: s.optionalNullable(s.string()),
  signatureId: s.optionalNullable(s.string()),
  signersAdded: s.optional(s.array(s.string())),
  signersRemoved: s.optional(s.array(s.string())),
  observersAdded: s.optional(s.array(s.string())),
  observersRemoved: s.optional(s.array(s.string())),
  delegatees: s.optional(s.array(s.string())),
  delegatedSignatureId: s.optionalNullable(s.string()),
  newSignatureIds: s.optional(s.array(s.string())),
  certificateSubject: s.optionalNullable(s.string()),
  certificateSerial: s.optionalNullable(s.string()),
  certificateIssuer: s.optionalNullable(s.string()),
  signatureImage: s.optionalNullable(s.string()),
  signerGroupsAdded: s.optional(s.array(s.string())),
  signerGroupsRemoved: s.optional(s.array(s.string())),
  signerGroupName: s.optionalNullable(s.string()),
  mabEvidenceId: s.optionalNullable(s.string()),
};

export const userActionInternalSchema: Schema<UserAction> = s.object<UserAction>(userActionProperties, {
  additionalProperties: s.json(),
});

export const userActionSchema: Schema<UserAction> = s.lazySchema(() =>
  s.object<UserAction>(
    {
      ...userActionProperties,
      documentPageCount: s.defaulted(s.int().check(s.gte(0)), 0),
      documentSize: s.defaulted(s.int().check(s.gte(0)), 0),
    },
    { additionalProperties: s.json() },
  ),
);
