import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AcmeExternalAccountBindingSummary = {
  /** The Amazon Resource Name (ARN) of the ACME external account binding. */
  acmeExternalAccountBindingArn?: string;
  /** The Amazon Resource Name (ARN) of the ACME endpoint. */
  acmeEndpointArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the external account binding.
   */
  roleArn?: string;
  /** The time at which the external account binding expires. */
  expiresAt?: string;
  /** The time at which the external account binding was revoked. */
  revokedAt?: string;
  /** The time at which the external account binding was last used. */
  lastUsedAt?: string;
  /** The time at which the external account binding was created. */
  createdAt?: string;
  /** The time at which the external account binding was last updated. */
  updatedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const acmeExternalAccountBindingSummarySchema: Schema<AcmeExternalAccountBindingSummary> =
  s.object<AcmeExternalAccountBindingSummary>(
    {
      acmeExternalAccountBindingArn: s.optional(s.string()),
      acmeEndpointArn: s.optional(s.string()),
      roleArn: s.optional(s.string()),
      expiresAt: s.optional(s.string()),
      revokedAt: s.optional(s.string()),
      lastUsedAt: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      updatedAt: s.optional(s.string()),
      _keysMap: {
        acmeExternalAccountBindingArn: "AcmeExternalAccountBindingArn",
        acmeEndpointArn: "AcmeEndpointArn",
        roleArn: "RoleArn",
        expiresAt: "ExpiresAt",
        revokedAt: "RevokedAt",
        lastUsedAt: "LastUsedAt",
        createdAt: "CreatedAt",
        updatedAt: "UpdatedAt",
      },
    },
    { additionalProperties: s.json() },
  );
