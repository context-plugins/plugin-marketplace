import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { azureCredentials2Schema, type AzureCredentials2 } from "./azure-credentials2.js";
import {
  federatedIdentityConfig2Schema,
  type FederatedIdentityConfig2,
} from "./federated-identity-config2.js";

/** Optional. An Azure Blob Storage data source. */
export type AzureBlobStorageData2 = {
  /**
   * Optional. The Resource name of a secret in Secret Manager. The Azure SAS token must be stored
   * in Secret Manager in JSON format: { "sas_token" : "SAS_TOKEN" } GoogleServiceAccount must be
   * granted `roles/secretmanager.secretAccessor` for the resource. See [Configure access to a
   * source: Microsoft Azure Blob Storage]
   * (https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#secret_manager) for more
   * information. If `credentials_secret` is specified, do not specify azure_credentials. Format:
   * `projects/{project_number}/secrets/{secret_name}`
   */
  credentialsSecret?: string;
  /**
   * Optional. Federated identity config of a user registered Azure application. If
   * `federated_identity_config` is specified, do not specify azure_credentials or
   * credentials_secret.
   */
  federatedIdentityConfig?: FederatedIdentityConfig2;
  /**
   * Required. Input only. Credentials used to authenticate API requests to Azure. For information
   * on our data retention policy for user credentials, see [User
   * credentials](/storage-transfer/docs/data-retention#user-credentials).
   */
  azureCredentials?: AzureCredentials2;
  /**
   * Service Directory Service to be used as the endpoint for transfers from a custom VPC. Format:
   * `projects/{project_id}/locations/{location}/namespaces/{namespace}/services/{service}`
   */
  privateNetworkService?: string;
  /** Required. The container to transfer from the Azure Storage account. */
  container?: string;
  /** Required. The name of the Azure Storage account. */
  storageAccount?: string;
  /**
   * Root path to transfer objects. Must be an empty string or full path name that ends with a '/'.
   * This field is treated as an object prefix. As such, it should generally not begin with a '/'.
   */
  path?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const azureBlobStorageData2Schema: Schema<AzureBlobStorageData2> = s.object<AzureBlobStorageData2>(
  {
    credentialsSecret: s.optional(s.string()),
    federatedIdentityConfig: s.optional(s.lazy(() => federatedIdentityConfig2Schema)),
    azureCredentials: s.optional(s.lazy(() => azureCredentials2Schema)),
    privateNetworkService: s.optional(s.string()),
    container: s.optional(s.string()),
    storageAccount: s.optional(s.string()),
    path: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
