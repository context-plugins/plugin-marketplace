import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signerDocumentToSignSchema, type SignerDocumentToSign } from "./signer-document-to-sign.js";

export type GroupSigner = {
  /**
   * Optional signing order for this signer, starting at `1`. If no sequence is supplied, signers
   * can sign in any order. When a number is set, Skribble enforces an ascending signing order
   * across all signers, based on their `sequence` values.
   *
   * @default -1
   */
  sequence?: number;
  /** Whether to send a notification to this signer. @default true */
  notify?: boolean;
  /** Visual signatures to place on the document. */
  documentSignatures?: SignerDocumentToSign[];
  /** Signer group ID. */
  signerGroupId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupSignerSchema: Schema<GroupSigner> = s.object<GroupSigner>(
  {
    sequence: s.defaulted(s.int(), -1),
    notify: s.defaulted(s.boolean(), true),
    documentSignatures: s.optional(s.array(s.lazy(() => signerDocumentToSignSchema))),
    signerGroupId: s.string(),
    _keysMap: {
      documentSignatures: "document_signatures",
      signerGroupId: "signer_group_id",
    },
  },
  { additionalProperties: s.json() },
);
