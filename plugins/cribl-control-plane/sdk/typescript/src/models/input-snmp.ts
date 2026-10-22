import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
import { snmPv3AuthenticationSchema, type SnmPv3Authentication } from "./snm-pv3-authentication.js";

export type InputSnmp = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "snmp" */
  type?: "snmp";
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
   * Address to bind on. For IPv4 (all addresses), use the default '0.0.0.0'. For IPv6, enter '::'
   * (all addresses) or specify an IP address.
   */
  host: string;
  /** UDP port to receive SNMP traps on. Defaults to 162. */
  port: number;
  /**
   * Authentication parameters for SNMPv3 trap. Set the log level to debug if you are experiencing
   * authentication or decryption issues.
   */
  snmpV3Auth?: SnmPv3Authentication;
  /** Maximum number of events to buffer when downstream is blocking. */
  maxBufferSize?: number;
  /** Regex matching IP addresses that are allowed to send data */
  ipWhitelistRegex?: string;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /**
   * Optionally, set the SO_RCVBUF socket option for the UDP socket. This value tells the operating
   * system how many bytes can be buffered in the kernel before events are dropped. Leave blank to
   * use the OS default. Caution: Increasing this value will affect OS memory utilization.
   */
  udpSocketRxBufSize?: number;
  /** If enabled, parses varbinds as an array of objects that include OID, value, and type */
  varbindsWithTypes?: boolean;
  /**
   * If enabled, the parser will attempt to parse varbind octet strings as UTF-8, first, otherwise
   * will fallback to other methods
   */
  bestEffortParsing?: boolean;
  /** Optional description for this configuration. */
  description?: string;
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
   * Binds 'host' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'host' at runtime.
   */
  templateHost?: string;
  /**
   * Binds 'port' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'port' at runtime.
   */
  templatePort?: string;
};

export const inputSnmpSchema: Schema<InputSnmp> = s.object<InputSnmp>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("snmp"), "snmp"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  host: s.string(),
  port: s.float64(),
  snmpV3Auth: s.optional(s.lazy(() => snmPv3AuthenticationSchema)),
  maxBufferSize: s.optional(s.float64()),
  ipWhitelistRegex: s.optional(s.string()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  udpSocketRxBufSize: s.optional(s.float64()),
  varbindsWithTypes: s.optional(s.boolean()),
  bestEffortParsing: s.optional(s.boolean()),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateHost: s.optional(s.string()),
  templatePort: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateHost: "__template_host",
    templatePort: "__template_port",
  },
});
