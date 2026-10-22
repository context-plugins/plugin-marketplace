import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod94Schema, type AuthenticationMethod94 } from "./authentication-method94.js";
import { certificateTypeSchema, type CertificateType } from "./certificate-type.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";

export type InputAzureVnetFlowLog = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "azure_vnet_flow_log" */
  type?: "azure_vnet_flow_log";
  /** If true, the Source is disabled and will not collect data. */
  disabled?: boolean;
  /** Pipeline to process data from this Source before sending it through the Routes */
  pipeline?: string;
  /** Select whether to send data to Routes, or directly to Destinations. */
  sendToRoutes?: boolean;
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /**
   * Use a disk queue to minimize data loss when connected services block. See [Cribl
   * Docs](https://docs.cribl.io/stream/persistent-queues) for PQ defaults (Cribl-managed Cloud
   * Workers) and configuration options (on-prem and hybrid Workers).
   */
  pqEnabled?: boolean;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /**
   * Read-only metadata that records how the Source was created. Preserved on update when omitted
   * from the request body. Cannot be set on create.
   */
  criblSourceProvenance?: InputProvenance;
  /** Direct connections to Destinations, and optionally via a Pipeline or a Pack */
  connections?: ConnectionConfInputCollection[];
  /** Persistent queue settings for this Source. */
  pq?: PqType;
  /**
   * The storage account queue name blob notifications will be read from. Value must be a JavaScript
   * expression (which can evaluate to a constant value), enclosed in quotes or backticks. Can be
   * evaluated only at initialization time. Example referencing a Global Variable:
   * `myQueue-${C.vars.myVar}`
   */
  queueName: string;
  /**
   * Regex matching file names to download and process. Defaults to: .*
   */
  fileFilter?: string;
  /**
   * The duration (in seconds) that the received messages are hidden from subsequent retrieve
   * requests after being retrieved by a ReceiveMessage request.
   */
  visibilityTimeout?: number;
  /**
   * How many receiver processes to run. The higher the number, the better the throughput - at the
   * expense of CPU overhead.
   */
  numReceivers?: number;
  /**
   * The maximum number of messages to return in a poll request. Azure storage queues never returns
   * more messages than this value (however, fewer messages might be returned). Valid values: 1 to
   * 32.
   */
  maxMessages?: number;
  /**
   * Number of times a non-matching message can be dequeued before it is permanently deleted. At the
   * default of 1, non-matching messages are deleted immediately (same as standard Azure Blob source
   * behavior). Set higher to leave messages in the queue for other consumers.
   */
  maxDequeueCount?: number;
  /** The duration (in seconds) which pollers should be validated and restarted if exited */
  servicePeriodSecs?: number;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /** Authentication method */
  authType?: AuthenticationMethod94;
  /** Optional description for this configuration. */
  description?: string;
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
   * Binds 'environment' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'environment' at runtime.
   */
  templateEnvironment?: string;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
  /**
   * Binds 'queueName' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'queueName' at
   * runtime.
   */
  templateQueueName?: string;
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

export const inputAzureVnetFlowLogSchema: Schema<InputAzureVnetFlowLog> = s.object<InputAzureVnetFlowLog>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("azure_vnet_flow_log"), "azure_vnet_flow_log"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  queueName: s.string(),
  fileFilter: s.optional(s.string()),
  visibilityTimeout: s.optional(s.float64()),
  numReceivers: s.optional(s.float64()),
  maxMessages: s.optional(s.float64()),
  maxDequeueCount: s.optional(s.float64()),
  servicePeriodSecs: s.optional(s.float64()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  breakerRulesets: s.optional(s.array(s.string())),
  staleChannelFlushMs: s.optional(s.float64()),
  authType: s.optional(s.lazy(() => authenticationMethod94Schema)),
  description: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  storageAccountName: s.optional(s.string()),
  tenantId: s.optional(s.string()),
  clientId: s.optional(s.string()),
  azureCloud: s.optional(s.string()),
  endpointSuffix: s.optional(s.string()),
  clientTextSecret: s.optional(s.string()),
  certificate: s.optional(s.lazy(() => certificateTypeSchema)),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateQueueName: s.optional(s.string()),
  templateStorageAccountName: s.optional(s.string()),
  templateTenantId: s.optional(s.string()),
  templateClientId: s.optional(s.string()),
  templateAzureCloud: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateQueueName: "__template_queueName",
    templateStorageAccountName: "__template_storageAccountName",
    templateTenantId: "__template_tenantId",
    templateClientId: "__template_clientId",
    templateAzureCloud: "__template_azureCloud",
  },
});
