import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { certificateAlgorithm3Schema, type CertificateAlgorithm3 } from "./certificate-algorithm3.js";
import { merchantAccountSummarySchema, type MerchantAccountSummary } from "./merchant-account-summary.js";
import { roleSchema, type Role } from "./role.js";
import { Type, typeSchema } from "./type.js";
import { creator2Schema, type Creator2 } from "./unions/creator2.js";
import { lastUsedAtSchema, type LastUsedAt } from "./unions/last-used-at.js";
import { privateKeySchema, type PrivateKey } from "./unions/private-key.js";

export type ApiKeyPair = {
  /** The type of this resource. @default Type.ApiKeyPair */
  type?: Type;
  /** The ID for the API key pair. */
  id: string;
  /** The unique thumbprint that identifies the API key pair. */
  thumbprint: string;
  /** The display name for the API key pair. */
  displayName: string;
  /** The algorithm used to generate the API key pair. */
  algorithm: CertificateAlgorithm3;
  /** Whether the API key pair is active and can be used to authenticate. */
  active: boolean;
  /**
   * The PEM-encoded private key. Only returned once, in the response to creating the API key pair,
   * and only when Gr4vy generated the key pair. Store it securely, as it cannot be retrieved later.
   */
  privateKey?: PrivateKey;
  /** The date and time when this API key pair was created. */
  createdAt: Date;
  /** The date and time when this API key pair was last updated. */
  updatedAt: Date;
  /**
   * The date and time when this API key pair was last used to authenticate, or `null` if it has
   * never been used.
   */
  lastUsedAt?: LastUsedAt;
  /** The user or API key pair that created this API key pair. */
  creator?: Creator2;
  /**
   * The merchant accounts this API key pair has access to. An empty list means it has access to all
   * merchant accounts.
   */
  merchantAccounts?: MerchantAccountSummary[];
  /** The roles assigned to this API key pair. */
  roles?: Role[];
};

export const apiKeyPairSchema: Schema<ApiKeyPair> = s.object<ApiKeyPair>({
  type: s.defaulted(typeSchema, Type.ApiKeyPair),
  id: s.string(),
  thumbprint: s.string(),
  displayName: s.string(),
  algorithm: certificateAlgorithm3Schema,
  active: s.boolean(),
  privateKey: s.optional(s.lazy(() => privateKeySchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  lastUsedAt: s.optional(s.lazy(() => lastUsedAtSchema)),
  creator: s.optional(s.lazy(() => creator2Schema)),
  merchantAccounts: s.optional(s.array(s.lazy(() => merchantAccountSummarySchema))),
  roles: s.optional(s.array(s.lazy(() => roleSchema))),
  _keysMap: {
    displayName: "display_name",
    privateKey: "private_key",
    createdAt: "created_at",
    updatedAt: "updated_at",
    lastUsedAt: "last_used_at",
    merchantAccounts: "merchant_accounts",
  },
});
