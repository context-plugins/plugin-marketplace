import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CredentialIssuerMetadata = {
  /**
   * The identifiers of the authorization servers that the credential issuer relies on for
   * authorization. This property corresponds to the authorization_servers metadata. When the
   * credential issuer works as an authorization server for itself, this property should be omitted.
   */
  authorizationServers?: string[];
  /** The identifier of a credential request. */
  credentialIssuer?: string;
  /** The URL of the credential endpoint of the credential issuer. */
  credentialEndpoint?: string;
  /** The URL of the batch credential endpoint of the credential issuer. */
  batchCredentialEndpoint?: string;
  /** The URL of the deferred credential endpoint of the credential issuer. */
  deferredCredentialEndpoint?: string;
  /**
   * A JSON object describing supported credential configurations. This property corresponds to the
   * credential_configurations_supported metadata. Note: Due to a breaking change in December 2023,
   * this was changed from a JSON array to a JSON object.
   */
  credentialsSupported?: string;
  /**
   * The supported JWE `alg` algorithms for credential response encryption. This property
   * corresponds to the `credential_response_encryption.alg_values_supported` metadata.
   */
  credentialResponseEncryptionAlgValuesSupported?: string[];
  /**
   * The supported JWE `enc` algorithms for credential response encryption. This property
   * corresponds to the `credential_response_encryption.enc_values_supported` metadata.
   */
  credentialResponseEncryptionEncValuesSupported?: string[];
  /**
   * The boolean flag indicating whether credential response encryption is required. This property
   * corresponds to the `credential_response_encryption.encryption_required metadata`. If this flag
   * is `true`, every credential request to the credential issuer must include the
   * `credential_response_encryption` property.
   */
  requireCredentialResponseEncryption?: boolean;
  /**
   * The boolean flag indicating whether credential request encryption is required. This property
   * corresponds to the `credential_request_encryption.encryption_required` metadata. If this flag
   * is `true`, every credential request to the credential issuer must be encrypted.
   */
  requireCredentialRequestEncryption?: boolean;
  /**
   * The supported JWE `zip` (compression) algorithms for credential response encryption. This
   * property corresponds to the `credential_response_encryption.zip_values_supported` metadata.
   */
  credentialResponseEncryptionZipValuesSupported?: string[];
  /**
   * The maximum array size for the `proofs` parameter in a credential request. This property
   * corresponds to the `batch_credential_issuance.batch_size` metadata. If the value of this
   * property is 2 or greater, the `batch_credential_issuance` parameter will appear in the response
   * from the credential issuer metadata endpoint.
   */
  batchSize?: number;
};

export const credentialIssuerMetadataSchema: Schema<CredentialIssuerMetadata> =
  s.object<CredentialIssuerMetadata>({
    authorizationServers: s.optional(s.array(s.string())),
    credentialIssuer: s.optional(s.string()),
    credentialEndpoint: s.optional(s.string()),
    batchCredentialEndpoint: s.optional(s.string()),
    deferredCredentialEndpoint: s.optional(s.string()),
    credentialsSupported: s.optional(s.string()),
    credentialResponseEncryptionAlgValuesSupported: s.optional(s.array(s.string())),
    credentialResponseEncryptionEncValuesSupported: s.optional(s.array(s.string())),
    requireCredentialResponseEncryption: s.optional(s.boolean()),
    requireCredentialRequestEncryption: s.optional(s.boolean()),
    credentialResponseEncryptionZipValuesSupported: s.optional(s.array(s.string())),
    batchSize: s.optional(s.int()),
  });
