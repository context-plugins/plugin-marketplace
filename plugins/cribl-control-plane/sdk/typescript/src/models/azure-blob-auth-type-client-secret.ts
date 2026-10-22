import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authType4Schema, type AuthType4 } from "./auth-type4.js";

export type AzureBlobAuthTypeClientSecret = {
  /** Discriminator value. */
  authType?: AuthType4;
  /** The name of your Azure storage account */
  storageAccountName: string;
  /** The service principal's tenant ID */
  tenantId: string;
  /** The service principal's client ID */
  clientId: string;
  /** Text secret containing the client secret */
  clientTextSecret: string;
  /**
   * The endpoint suffix for the service URL. Takes precedence over the Azure Cloud setting.
   * Defaults to core.windows.net.
   */
  endpointSuffix?: string;
  /** The Azure cloud to use. Defaults to Azure Public Cloud. */
  azureCloud?: string;
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
   * Binds 'endpointSuffix' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'endpointSuffix' at runtime.
   */
  templateEndpointSuffix?: string;
  /**
   * Binds 'azureCloud' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'azureCloud' at
   * runtime.
   */
  templateAzureCloud?: string;
};

export const azureBlobAuthTypeClientSecretSchema: Schema<AzureBlobAuthTypeClientSecret> =
  s.object<AzureBlobAuthTypeClientSecret>({
    authType: s.optional(s.lazy(() => authType4Schema)),
    storageAccountName: s.string(),
    tenantId: s.string(),
    clientId: s.string(),
    clientTextSecret: s.string(),
    endpointSuffix: s.optional(s.string()),
    azureCloud: s.optional(s.string()),
    templateStorageAccountName: s.optional(s.string()),
    templateTenantId: s.optional(s.string()),
    templateClientId: s.optional(s.string()),
    templateEndpointSuffix: s.optional(s.string()),
    templateAzureCloud: s.optional(s.string()),
    _keysMap: {
      templateStorageAccountName: "__template_storageAccountName",
      templateTenantId: "__template_tenantId",
      templateClientId: "__template_clientId",
      templateEndpointSuffix: "__template_endpointSuffix",
      templateAzureCloud: "__template_azureCloud",
    },
  });
