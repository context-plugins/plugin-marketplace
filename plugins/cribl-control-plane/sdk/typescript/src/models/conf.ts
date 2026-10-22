import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod1Schema, type AuthenticationMethod1 } from "./authentication-method1.js";
import {
  certificateTypeAzureBlobAuthTypeClientCertSchema,
  type CertificateTypeAzureBlobAuthTypeClientCert,
} from "./certificate-type-azure-blob-auth-type-client-cert.js";
import { pathExtractorSchema, type PathExtractor } from "./path-extractor.js";

/** Collector configuration */
export type Conf = {
  /** An optional predefined Destination that will be used to auto-populate Collector settings */
  outputName?: string;
  /** Enter authentication data directly, or select a secret referencing your auth data */
  authType?: AuthenticationMethod1;
  /**
   * Container to collect from. This value can be a constant, or a JavaScript expression that can
   * only be evaluated at init time. Example referencing a Global Variable: myBucket-${C.vars.myVar}
   */
  containerName: string;
  /**
   * The directory from which to collect data. Templating is supported, such as
   * myDir/${datacenter}/${host}/${app}/. Time-based tokens are supported, such as
   * myOtherDir/${_time:%Y}/${_time:%m}/${_time:%d}/.
   */
  path?: string;
  /**
   * Extractors allow use of template tokens as context for expressions that enrich discovery
   * results. For example, given a template /path/${epoch}, an extractor under key "epoch" with an
   * expression {date: new Date(+value*1000)} will enrich discovery results with a human-readable
   * "date" field.
   */
  extractors?: PathExtractor[];
  /** Recurse through subdirectories */
  recurse?: boolean;
  /**
   * Include Azure Blob metadata in collected events. In each event, metadata will be located at:
   * __collectible.metadata.
   */
  includeMetadata?: boolean;
  /**
   * Include Azure Blob tags in collected events. In each event, tags will be located at:
   * __collectible.tags. Disable this feature when using a Shared Access Signature Connection
   * String, to prevent errors.
   */
  includeTags?: boolean;
  /**
   * Azure blob types to include during collection. At least one type must be selected. Append blobs
   * may cause data duplication when collected before they are finalized.
   */
  blobTypes?: string[];
  /** Maximum number of metadata objects to batch before recording as results */
  maxBatchSize?: number;
  /** Disable Collector event time filtering when a date range is specified */
  disableTimeFilter?: boolean;
  /** Maximum file size for each Parquet chunk */
  parquetChunkSizeMb?: number;
  /**
   * The maximum time allowed for downloading a Parquet chunk. Processing will abort if a chunk
   * cannot be downloaded within the time specified.
   */
  parquetChunkDownloadTimeout?: number;
  /**
   * Enter your Azure storage account Connection String. If left blank, Cribl Stream will fall back
   * to env.AZURE_STORAGE_CONNECTION_STRING.
   */
  connectionString: string;
  /**
   * Binds 'connectionString' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'connectionString' at runtime.
   */
  templateConnectionString?: string;
  /** Text secret */
  textSecret: string;
  /** The name of your Azure storage account */
  storageAccountName: string;
  /**
   * Binds 'storageAccountName' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'storageAccountName' at runtime.
   */
  templateStorageAccountName?: string;
  /** The service principal's tenant ID */
  tenantId: string;
  /**
   * Binds 'tenantId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'tenantId' at runtime.
   */
  templateTenantId?: string;
  /** The service principal's client ID */
  clientId: string;
  /**
   * Binds 'clientId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'clientId' at runtime.
   */
  templateClientId?: string;
  /** Text secret containing the client secret */
  clientTextSecret: string;
  /**
   * The endpoint suffix for the service URL. Takes precedence over the Azure Cloud setting.
   * Defaults to core.windows.net.
   */
  endpointSuffix?: string;
  /**
   * Binds 'endpointSuffix' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'endpointSuffix' at runtime.
   */
  templateEndpointSuffix?: string;
  /** The Azure cloud to use. Defaults to Azure Public Cloud. */
  azureCloud?: string;
  /**
   * Binds 'azureCloud' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'azureCloud' at
   * runtime.
   */
  templateAzureCloud?: string;
  /** Certificate credentials for the service principal. */
  certificate: CertificateTypeAzureBlobAuthTypeClientCert;
  /**
   * Binds 'containerName' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'containerName' at runtime.
   */
  templateContainerName?: string;
  /**
   * Binds 'path' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'path' at runtime.
   */
  templatePath?: string;
};

export const confSchema: Schema<Conf> = s.object<Conf>({
  outputName: s.optional(s.string()),
  authType: s.optional(s.lazy(() => authenticationMethod1Schema)),
  containerName: s.string(),
  path: s.optional(s.string()),
  extractors: s.optional(s.array(s.lazy(() => pathExtractorSchema))),
  recurse: s.optional(s.boolean()),
  includeMetadata: s.optional(s.boolean()),
  includeTags: s.optional(s.boolean()),
  blobTypes: s.optional(s.array(s.string())),
  maxBatchSize: s.optional(s.float64()),
  disableTimeFilter: s.optional(s.boolean()),
  parquetChunkSizeMb: s.optional(s.float64()),
  parquetChunkDownloadTimeout: s.optional(s.float64()),
  connectionString: s.string(),
  templateConnectionString: s.optional(s.string()),
  textSecret: s.string(),
  storageAccountName: s.string(),
  templateStorageAccountName: s.optional(s.string()),
  tenantId: s.string(),
  templateTenantId: s.optional(s.string()),
  clientId: s.string(),
  templateClientId: s.optional(s.string()),
  clientTextSecret: s.string(),
  endpointSuffix: s.optional(s.string()),
  templateEndpointSuffix: s.optional(s.string()),
  azureCloud: s.optional(s.string()),
  templateAzureCloud: s.optional(s.string()),
  certificate: certificateTypeAzureBlobAuthTypeClientCertSchema,
  templateContainerName: s.optional(s.string()),
  templatePath: s.optional(s.string()),
  _keysMap: {
    parquetChunkSizeMb: "parquetChunkSizeMB",
    templateConnectionString: "__template_connectionString",
    templateStorageAccountName: "__template_storageAccountName",
    templateTenantId: "__template_tenantId",
    templateClientId: "__template_clientId",
    templateEndpointSuffix: "__template_endpointSuffix",
    templateAzureCloud: "__template_azureCloud",
    templateContainerName: "__template_containerName",
    templatePath: "__template_path",
  },
});
