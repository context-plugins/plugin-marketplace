import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signerDocumentToSignSchema, type SignerDocumentToSign } from "./signer-document-to-sign.js";
import {
  signerIdentityDataInternalSchema,
  signerIdentityDataSchema,
  type SignerIdentityData,
} from "./signer-identity-data.js";

export type UserSigner = {
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
  /** Optional signer account email address. */
  accountEmail?: string;
  /** Optional (no-account) signer identity information. */
  signerIdentityData?: SignerIdentityData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userSignerProperties: s.Shape<UserSigner> = {
  sequence: s.defaulted(s.int(), -1),
  notify: s.defaulted(s.boolean(), true),
  documentSignatures: s.optional(s.array(s.lazy(() => signerDocumentToSignSchema))),
  accountEmail: s.optional(s.string()),
  signerIdentityData: s.optional(s.lazy(() => signerIdentityDataInternalSchema)),
  _keysMap: {
    documentSignatures: "document_signatures",
    accountEmail: "account_email",
    signerIdentityData: "signer_identity_data",
  },
};

export const userSignerInternalSchema: Schema<UserSigner> = s.object<UserSigner>(userSignerProperties, {
  additionalProperties: s.json(),
});

export const userSignerSchema: Schema<UserSigner> = s.lazySchema(() =>
  s.object<UserSigner>(
    {
      ...userSignerProperties,
      accountEmail: s.optional(s.string().check(s.email())),
      signerIdentityData: s.optional(s.lazy(() => signerIdentityDataSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
