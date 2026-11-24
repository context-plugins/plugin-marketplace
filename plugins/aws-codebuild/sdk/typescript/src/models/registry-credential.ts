import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RegistryCredential = {
  /**
   * The Amazon Resource Name (ARN) or name of credentials created using Secrets Manager. The
   * credential can use the name of the credentials only if they exist in your current Amazon Web
   * Services Region.
   */
  credential: string;
  /**
   * The service that created the credentials to access a private Docker registry. The valid value,
   * SECRETS_MANAGER, is for Secrets Manager.
   *
   * @default "SECRETS_MANAGER"
   */
  credentialProvider?: "SECRETS_MANAGER";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registryCredentialSchema: Schema<RegistryCredential> = s.object<RegistryCredential>(
  {
    credential: s.string(),
    credentialProvider: s.defaulted(s.literal("SECRETS_MANAGER"), "SECRETS_MANAGER"),
  },
  { additionalProperties: s.json() },
);
