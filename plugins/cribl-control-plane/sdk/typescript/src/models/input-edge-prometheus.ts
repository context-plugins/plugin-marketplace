import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethodSchema, type AuthenticationMethod } from "./authentication-method.js";
import { authenticationMethod16Schema, type AuthenticationMethod16 } from "./authentication-method16.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { discoveryType1Schema, type DiscoveryType1 } from "./discovery-type1.js";
import { diskSpoolingSchema, type DiskSpooling } from "./disk-spooling.js";
import { filterRuleSchema, type FilterRule } from "./filter-rule.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { protocolSchema, type Protocol } from "./protocol.js";
import { recordTypeSchema, type RecordType } from "./record-type.js";
import {
  refreshRequestParamConfHealthCheckAuthenticationOauthSecretSchema,
  type RefreshRequestParamConfHealthCheckAuthenticationOauthSecret,
} from "./refresh-request-param-conf-health-check-authentication-oauth-secret.js";
import {
  searchFilterConfInputPrometheusSchema,
  type SearchFilterConfInputPrometheus,
} from "./search-filter-conf-input-prometheus.js";
import { targetSchema, type Target } from "./target.js";

export type InputEdgePrometheus = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "edge_prometheus" */
  type?: "edge_prometheus";
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
  /** Other dimensions to include in events */
  dimensionList?: string[];
  /**
   * When enabled, each metric name is used as the event field key (example: go_threads: 9) instead
   * of the default _metric/_value format.
   */
  fieldPerMetric?: boolean;
  /** Target discovery mechanism. Use static to manually enter a list of targets. */
  discoveryType: DiscoveryType1;
  /** How often in seconds to scrape targets for metrics. */
  interval: number;
  /** Timeout, in milliseconds, before aborting HTTP connection attempts; 1-60000 or 0 to disable */
  timeout?: number;
  /** Disk Spooling */
  persistence?: DiskSpooling;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** Enter credentials directly, or select a stored secret */
  authType?: AuthenticationMethod16;
  /** Optional description for this configuration. */
  description?: string;
  /** Targets */
  targets?: Target[];
  /** DNS record type to resolve */
  recordType?: RecordType;
  /** The port number in the metrics URL for discovered targets. */
  scrapePort?: number;
  /** List of DNS names to resolve */
  nameList?: string[];
  /** Protocol to use when collecting metrics */
  scrapeProtocol?: Protocol;
  /** Path to use when collecting metrics from discovered targets */
  scrapePath?: string;
  /** AWS authentication method. Choose Auto to use IAM roles. */
  awsAuthenticationMethod?: AuthenticationMethod;
  /** Access key */
  awsApiKey?: string;
  /** Select or create a stored secret that references your access key and secret key */
  awsSecret?: string;
  /** Use public IP address for discovered targets. Disable to use the private IP address. */
  usePublicIp?: boolean;
  /** Filter to apply when searching for EC2 instances */
  searchFilter?: SearchFilterConfInputPrometheus[];
  /** Secret key */
  awsSecretKey?: string;
  /** Region where the EC2 is located */
  region?: string;
  /**
   * EC2 service endpoint. If empty, defaults to the AWS Region-specific endpoint. Otherwise, it
   * must point to EC2-compatible endpoint.
   */
  endpoint?: string;
  /** Reuse connections between requests, which can improve performance */
  reuseConnections?: boolean;
  /**
   * Reject certificates that cannot be verified against a valid CA, such as self-signed
   * certificates
   */
  rejectUnauthorized?: boolean;
  /** Use Assume Role credentials to access EC2 */
  enableAssumeRole?: boolean;
  /** Amazon Resource Name (ARN) of the role to assume */
  assumeRoleArn?: string;
  /** External ID to use when assuming role */
  assumeRoleExternalId?: string;
  /**
   * Duration of the assumed role's session, in seconds. Minimum is 900 (15 minutes), default is
   * 3600 (1 hour), and maximum is 43200 (12 hours).
   */
  durationSeconds?: number;
  /**
   * Namespace to search for ServiceMonitor resources. Leave empty to search in all namespaces.
   * Note: Kubernetes Service Monitor discovery requires Cribl Edge version 4.18 or greater. Nodes
   * running an older version with this option configured will report an error due to configuration
   * schema validation failure.
   */
  serviceMonitorNamespace?: string;
  /** Protocol to use when collecting metrics */
  scrapeProtocolExpr?: string;
  /** The port number in the metrics URL for discovered targets. */
  scrapePortExpr?: string;
  /** Path to use when collecting metrics from discovered targets */
  scrapePathExpr?: string;
  /**
   * Add rules to decide which pods to discover for metrics. Pods are searched if no rules are given
   * or of all the rules' expressions evaluate to true.
   */
  podFilter?: FilterRule[];
  /** URL to fetch target groups from (must be http or https) */
  httpDiscoveryUrl?: string;
  /** Extra headers to send with the discovery request */
  httpDiscoveryHeaders?: RefreshRequestParamConfHealthCheckAuthenticationOauthSecret[];
  /**
   * Reject TLS certificates that cannot be verified for the discovery endpoint. Falls back to the
   * source-level setting if not specified.
   */
  httpDiscoveryRejectUnauthorized?: boolean;
  /**
   * Maximum size of the HTTP SD response body. Responses exceeding this limit will be rejected.
   * Defaults to 20 MB.
   */
  maxResponseBodySize?: string;
  /** Username for Prometheus Basic authentication */
  username?: string;
  /** Password for Prometheus Basic authentication */
  password?: string;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
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
   * Binds 'dimensionList' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'dimensionList' at runtime.
   */
  templateDimensionList?: string;
  /**
   * Binds 'nameList' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'nameList' at runtime.
   */
  templateNameList?: string;
  /**
   * Binds 'awsApiKey' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'awsApiKey' at
   * runtime.
   */
  templateAwsApiKey?: string;
  /**
   * Binds 'awsSecretKey' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'awsSecretKey' at runtime.
   */
  templateAwsSecretKey?: string;
  /**
   * Binds 'region' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'region' at runtime.
   */
  templateRegion?: string;
  /**
   * Binds 'endpoint' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'endpoint' at runtime.
   */
  templateEndpoint?: string;
  /**
   * Binds 'assumeRoleArn' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'assumeRoleArn' at runtime.
   */
  templateAssumeRoleArn?: string;
  /**
   * Binds 'assumeRoleExternalId' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'assumeRoleExternalId' at runtime.
   */
  templateAssumeRoleExternalId?: string;
};

export const inputEdgePrometheusSchema: Schema<InputEdgePrometheus> = s.object<InputEdgePrometheus>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("edge_prometheus"), "edge_prometheus"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  dimensionList: s.optional(s.array(s.string())),
  fieldPerMetric: s.optional(s.boolean()),
  discoveryType: discoveryType1Schema,
  interval: s.float64(),
  timeout: s.optional(s.float64()),
  persistence: s.optional(s.lazy(() => diskSpoolingSchema)),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  authType: s.optional(s.lazy(() => authenticationMethod16Schema)),
  description: s.optional(s.string()),
  targets: s.optional(s.array(s.lazy(() => targetSchema))),
  recordType: s.optional(s.lazy(() => recordTypeSchema)),
  scrapePort: s.optional(s.float64()),
  nameList: s.optional(s.array(s.string())),
  scrapeProtocol: s.optional(s.lazy(() => protocolSchema)),
  scrapePath: s.optional(s.string()),
  awsAuthenticationMethod: s.optional(s.lazy(() => authenticationMethodSchema)),
  awsApiKey: s.optional(s.string()),
  awsSecret: s.optional(s.string()),
  usePublicIp: s.optional(s.boolean()),
  searchFilter: s.optional(s.array(s.lazy(() => searchFilterConfInputPrometheusSchema))),
  awsSecretKey: s.optional(s.string()),
  region: s.optional(s.string()),
  endpoint: s.optional(s.string()),
  reuseConnections: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  enableAssumeRole: s.optional(s.boolean()),
  assumeRoleArn: s.optional(s.string()),
  assumeRoleExternalId: s.optional(s.string()),
  durationSeconds: s.optional(s.float64()),
  serviceMonitorNamespace: s.optional(s.string()),
  scrapeProtocolExpr: s.optional(s.string()),
  scrapePortExpr: s.optional(s.string()),
  scrapePathExpr: s.optional(s.string()),
  podFilter: s.optional(s.array(s.lazy(() => filterRuleSchema))),
  httpDiscoveryUrl: s.optional(s.string()),
  httpDiscoveryHeaders: s.optional(
    s.array(s.lazy(() => refreshRequestParamConfHealthCheckAuthenticationOauthSecretSchema)),
  ),
  httpDiscoveryRejectUnauthorized: s.optional(s.boolean()),
  maxResponseBodySize: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateDimensionList: s.optional(s.string()),
  templateNameList: s.optional(s.string()),
  templateAwsApiKey: s.optional(s.string()),
  templateAwsSecretKey: s.optional(s.string()),
  templateRegion: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  templateAssumeRoleArn: s.optional(s.string()),
  templateAssumeRoleExternalId: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateDimensionList: "__template_dimensionList",
    templateNameList: "__template_nameList",
    templateAwsApiKey: "__template_awsApiKey",
    templateAwsSecretKey: "__template_awsSecretKey",
    templateRegion: "__template_region",
    templateEndpoint: "__template_endpoint",
    templateAssumeRoleArn: "__template_assumeRoleArn",
    templateAssumeRoleExternalId: "__template_assumeRoleExternalId",
  },
});
