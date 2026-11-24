import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { SignatureLanguage, signatureLanguageSchema } from "./signature-language.js";
import {
  signerIdentityDataInternalSchema,
  signerIdentityDataSchema,
  type SignerIdentityData,
} from "./signer-identity-data.js";
import { visualSignatureSchema, type VisualSignature } from "./unions/visual-signature.js";

export type SignatureRecipient = {
  /** Optional signer account email address. */
  accountEmail?: string;
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
  /**
   * Determines in which language e-mails are sent to the user, if the user has not set their
   * language preference yet.
   *
   * @default SignatureLanguage.En
   */
  language?: SignatureLanguage;
  /** Optional (no-account) signer identity information. */
  signerIdentityData?: SignerIdentityData;
  /** Visual signature placement information. */
  visualSignature?: VisualSignature;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signatureRecipientProperties: s.Shape<SignatureRecipient> = {
  accountEmail: s.optional(s.string()),
  sequence: s.defaulted(s.int(), -1),
  notify: s.defaulted(s.boolean(), true),
  language: s.defaulted(signatureLanguageSchema, SignatureLanguage.En),
  signerIdentityData: s.optional(s.lazy(() => signerIdentityDataInternalSchema)),
  visualSignature: s.optional(s.lazy(() => visualSignatureSchema)),
  _keysMap: {
    accountEmail: "account_email",
    signerIdentityData: "signer_identity_data",
    visualSignature: "visual_signature",
  },
};

export const signatureRecipientInternalSchema: Schema<SignatureRecipient> = s.object<SignatureRecipient>(
  signatureRecipientProperties,
  { additionalProperties: s.json() },
);

export const signatureRecipientSchema: Schema<SignatureRecipient> = s.lazySchema(() =>
  s.object<SignatureRecipient>(
    {
      ...signatureRecipientProperties,
      accountEmail: s.optional(s.string().check(s.email())),
      signerIdentityData: s.optional(s.lazy(() => signerIdentityDataSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
