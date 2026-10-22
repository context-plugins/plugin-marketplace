import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod94Schema, type AuthenticationMethod94 } from "./authentication-method94.js";
import { certificateTypeSchema, type CertificateType } from "./certificate-type.js";

/** Azure Blob Storage */
export type AzureBlobStorage = {
  /**
   * Azure Blob Storage container used to store checkpoints. Must be 3–63 lowercase alphanumeric
   * characters or hyphens.
   */
  containerName: string;
  /** Authentication method */
  authType?: AuthenticationMethod94;
  /** Select or create a stored text secret */
  textSecret?: string;
  /** The name of your Azure storage account */
  storageAccountName?: string;
  /** The service principal's tenant ID */
  tenantId?: string;
  /** The service principal's client ID */
  clientId?: string;
  /** The Azure cloud to use. Defaults to Azure Public Cloud. */
  azureCloud?: string;
  /**
   * Endpoint suffix for the service URL. Takes precedence over the Azure Cloud setting. Defaults to
   * core.windows.net.
   */
  endpointSuffix?: string;
  /** Select or create a stored text secret */
  clientTextSecret?: string;
  /** Certificate credentials for the Azure service principal. */
  certificate?: CertificateType;
  /**
   * Binds 'storageAccountName' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'storageAccountName' at runtime.
   */
  templateStorageAccountName?: string;
  /**
   * Binds 'tenantId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'tenantId' at runtime.
   */
  templateTenantId?: string;
  /**
   * Binds 'clientId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'clientId' at runtime.
   */
  templateClientId?: string;
  /**
   * Binds 'azureCloud' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'azureCloud' at
   * runtime.
   */
  templateAzureCloud?: string;
};

export const azureBlobStorageSchema: Schema<AzureBlobStorage> = s.object<AzureBlobStorage>({
  containerName: s.string(),
  authType: s.optional(s.lazy(() => authenticationMethod94Schema)),
  textSecret: s.optional(s.string()),
  storageAccountName: s.optional(s.string()),
  tenantId: s.optional(s.string()),
  clientId: s.optional(s.string()),
  azureCloud: s.optional(s.string()),
  endpointSuffix: s.optional(s.string()),
  clientTextSecret: s.optional(s.string()),
  certificate: s.optional(s.lazy(() => certificateTypeSchema)),
  templateStorageAccountName: s.optional(s.string()),
  templateTenantId: s.optional(s.string()),
  templateClientId: s.optional(s.string()),
  templateAzureCloud: s.optional(s.string()),
  _keysMap: {
    templateStorageAccountName: "__template_storageAccountName",
    templateTenantId: "__template_tenantId",
    templateClientId: "__template_clientId",
    templateAzureCloud: "__template_azureCloud",
  },
});
