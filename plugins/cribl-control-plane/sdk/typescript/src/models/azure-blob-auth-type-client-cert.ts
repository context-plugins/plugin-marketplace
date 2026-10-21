import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authType5Schema, type AuthType5 } from "./auth-type5.js";
import {
  certificateTypeAzureBlobAuthTypeClientCertSchema,
  type CertificateTypeAzureBlobAuthTypeClientCert,
} from "./certificate-type-azure-blob-auth-type-client-cert.js";

export type AzureBlobAuthTypeClientCert = {
  /** Discriminator value. */
  authType?: AuthType5;
  /** The name of your Azure storage account */
  storageAccountName: string;
  /** The service principal's tenant ID */
  tenantId: string;
  /** The service principal's client ID */
  clientId: string;
  /** Certificate credentials for the service principal. */
  certificate: CertificateTypeAzureBlobAuthTypeClientCert;
  /** The Azure cloud to use. Defaults to Azure Public Cloud. */
  azureCloud?: string;
  /**
   * The endpoint suffix for the service URL. Takes precedence over the Azure Cloud setting.
   * Defaults to core.windows.net.
   */
  endpointSuffix?: string;
};

export const azureBlobAuthTypeClientCertSchema: Schema<AzureBlobAuthTypeClientCert> =
  s.object<AzureBlobAuthTypeClientCert>({
    authType: s.optional(s.lazy(() => authType5Schema)),
    storageAccountName: s.string(),
    tenantId: s.string(),
    clientId: s.string(),
    certificate: certificateTypeAzureBlobAuthTypeClientCertSchema,
    azureCloud: s.optional(s.string()),
    endpointSuffix: s.optional(s.string()),
  });
