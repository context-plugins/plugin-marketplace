import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { certificateAlgorithm1Schema, type CertificateAlgorithm1 } from "./certificate-algorithm1.js";
import { publicKeySchema, type PublicKey } from "./unions/public-key.js";

export type ApiKeyPairCreate = {
  /** The display name for the API key pair. */
  displayName: string;
  /** The algorithm to use to generate the API key pair. */
  algorithm?: CertificateAlgorithm1;
  /** Whether the API key pair should be active and usable once created. @default true */
  active?: boolean;
  /**
   * The IDs of the roles to assign to the API key pair. The caller can only assign roles whose
   * scopes are a subset of its own.
   */
  roleIds: string[];
  /**
   * The IDs of the merchant accounts to associate with the API key pair. An empty list grants
   * access to all merchant accounts. The caller can only assign merchant accounts it has access to.
   */
  merchantAccountIds?: string[];
  /**
   * A PEM-encoded ECDSA P-521 (ES512) public key. Provide this to register your own key pair (bring
   * your own key); If omitted, Gr4vy will generate the key pair and return the private key.
   */
  publicKey?: PublicKey;
};

export const apiKeyPairCreateSchema: Schema<ApiKeyPairCreate> = s.object<ApiKeyPairCreate>({
  displayName: s.string(),
  algorithm: s.optional(s.lazy(() => certificateAlgorithm1Schema)),
  active: s.defaulted(s.boolean(), true),
  roleIds: s.array(s.string()),
  merchantAccountIds: s.optional(s.array(s.string())),
  publicKey: s.optional(s.lazy(() => publicKeySchema)),
  _keysMap: {
    displayName: "display_name",
    roleIds: "role_ids",
    merchantAccountIds: "merchant_account_ids",
    publicKey: "public_key",
  },
});
