import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import { facilitySchema, type Facility } from "./facility.js";
import { hostConfOutputSyslogSchema, type HostConfOutputSyslog } from "./host-conf-output-syslog.js";
import { messageFormat4Schema, type MessageFormat4 } from "./message-format4.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { protocol3Schema, type Protocol3 } from "./protocol3.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";
import { severity1Schema, type Severity1 } from "./severity1.js";
import { timestampFormat2Schema, type TimestampFormat2 } from "./timestamp-format2.js";
import { tlsSettingsClientSide33Schema, type TlsSettingsClientSide33 } from "./tls-settings-client-side33.js";

export type OutputSyslog = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "syslog" */
  type?: "syslog";
  /** Pipeline to process data before sending out to this output */
  pipeline?: string;
  /** Fields to automatically add to events, such as cribl_pipe. Supports wildcards. */
  systemFields?: string[];
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /** The network protocol to use for sending out syslog messages */
  protocol?: Protocol3;
  /**
   * Default value for message facility. Will be overwritten by value of __facility if set. Defaults
   * to user.
   */
  facility?: Facility;
  /**
   * Default value for message severity. Will be overwritten by value of __severity if set. Defaults
   * to notice.
   */
  severity?: Severity1;
  /**
   * Default name for device or application that originated the message. Defaults to Cribl, but will
   * be overwritten by value of __appname if set.
   */
  appName?: string;
  /** The syslog message format depending on the receiver's support */
  messageFormat?: MessageFormat4;
  /** Timestamp format to use when serializing event's time field */
  timestampFormat?: TimestampFormat2;
  /**
   * Rate (in bytes per second) to throttle while writing to an output. Accepts values with
   * multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no
   * throttling.
   */
  throttleRatePerSec?: string;
  /**
   * Prefix messages with the byte count of the message. If disabled, no prefix will be set, and the
   * message will be appended with a \n.
   */
  octetCountFraming?: boolean;
  /** Use to troubleshoot issues with sending data */
  logFailedRequests?: boolean;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * For optimal performance, enable load balancing even if you have one hostname, as it can expand
   * to multiple IPs. If this setting is disabled, consider enabling round-robin DNS.
   */
  loadBalanced?: boolean;
  /** The hostname of the receiver */
  host?: string;
  /** The port to connect to on the provided host */
  port?: number;
  /** Exclude all IPs of the current host from the list of any resolved hostnames */
  excludeSelf?: boolean;
  /** Set of hosts to load-balance data to */
  hosts?: HostConfOutputSyslog[];
  /** The interval in which to re-resolve any hostnames and pick up destinations from A records */
  dnsResolvePeriodSec?: number;
  /** How far back in time to keep traffic stats for load balancing purposes */
  loadBalanceStatsPeriodSec?: number;
  /**
   * Maximum number of concurrent connections (per Worker Process). A random set of IPs will be
   * picked on every DNS resolution period. Use 0 for unlimited.
   */
  maxConcurrentSenders?: number;
  /** Amount of time (milliseconds) to wait for the connection to establish before retrying */
  connectionTimeout?: number;
  /**
   * Amount of time (milliseconds) to wait for a write to complete before assuming connection is
   * dead
   */
  writeTimeout?: number;
  /** TLS settings (client side) */
  tls?: TlsSettingsClientSide33;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /**
   * Maximum size of syslog messages. Make sure this value is less than or equal to the MTU to avoid
   * UDP packet fragmentation.
   */
  maxRecordSize?: number;
  /**
   * How often to resolve the destination hostname to an IP address. Ignored if the destination is
   * an IP address. A value of 0 means every message sent will incur a DNS lookup.
   */
  udpDnsResolvePeriodSec?: number;
  /**
   * Send Syslog traffic using the original event's Source IP and port. To enable this, you must
   * install the external `udp-sender` helper binary at `/usr/bin/udp-sender` on all Worker Nodes
   * and grant it the `CAP_NET_RAW` capability.
   */
  enableIpSpoofing?: boolean;
  /**
   * Use FIFO (first in, first out) processing. Disable to forward new events to receivers before
   * queue is flushed.
   */
  pqStrictOrdering?: boolean;
  /**
   * Throttling rate (in events per second) to impose while writing to Destinations from PQ.
   * Defaults to 0, which disables throttling.
   */
  pqRatePerSec?: number;
  /**
   * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In
   * Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the
   * Destination. In Always On mode, PQ always writes events to the filesystem.
   */
  pqMode?: Mode76;
  /**
   * Maximum number of events to hold in memory before writing the events to disk. Deprecated and
   * only supported in workers < v4.17.0. Use pqMaxBufferSizeBytes instead.
   */
  pqMaxBufferSize?: number;
  /** How long (in seconds) to wait for backpressure to resolve before engaging the queue */
  pqMaxBackpressureSec?: number;
  /**
   * The maximum size to store in each queue file before closing and optionally compressing (KB, MB,
   * etc.)
   */
  pqMaxFileSize?: string;
  /**
   * The maximum disk space that the queue can consume (as an average per Worker Process) before
   * queueing stops. Enter a numeral with units of KB, MB, etc.
   */
  pqMaxSize?: string;
  /**
   * The location for the persistent queue files. To this field's value, the system will append:
   * /<worker-id>/<output-id>.
   */
  pqPath?: string;
  /** Codec to use to compress the persisted data */
  pqCompress?: Compression;
  /**
   * How to handle events when the queue is exerting backpressure (full capacity or low disk).
   * 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data,
   * while leaving the contents of the PQ unchanged.
   */
  pqOnBackpressure?: QueueFullBehavior62;
  /**
   * The maximum size to hold in memory before writing events to disk. Enter a numeral with units of
   * KB, MB, etc. The minimum value is 64KB and the maximum value is 10MB.
   */
  pqMaxBufferSizeBytes?: string;
  /** Persistent queue controls. */
  pqControls?: Record<string, unknown>;
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
  /**
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
};

export const outputSyslogSchema: Schema<OutputSyslog> = s.object<OutputSyslog>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("syslog"), "syslog"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  protocol: s.optional(s.lazy(() => protocol3Schema)),
  facility: s.optional(s.lazy(() => facilitySchema)),
  severity: s.optional(s.lazy(() => severity1Schema)),
  appName: s.optional(s.string()),
  messageFormat: s.optional(s.lazy(() => messageFormat4Schema)),
  timestampFormat: s.optional(s.lazy(() => timestampFormat2Schema)),
  throttleRatePerSec: s.optional(s.string()),
  octetCountFraming: s.optional(s.boolean()),
  logFailedRequests: s.optional(s.boolean()),
  description: s.optional(s.string()),
  loadBalanced: s.optional(s.boolean()),
  host: s.optional(s.string()),
  port: s.optional(s.float64()),
  excludeSelf: s.optional(s.boolean()),
  hosts: s.optional(s.array(s.lazy(() => hostConfOutputSyslogSchema))),
  dnsResolvePeriodSec: s.optional(s.float64()),
  loadBalanceStatsPeriodSec: s.optional(s.float64()),
  maxConcurrentSenders: s.optional(s.float64()),
  connectionTimeout: s.optional(s.float64()),
  writeTimeout: s.optional(s.float64()),
  tls: s.optional(s.lazy(() => tlsSettingsClientSide33Schema)),
  onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
  maxRecordSize: s.optional(s.float64()),
  udpDnsResolvePeriodSec: s.optional(s.float64()),
  enableIpSpoofing: s.optional(s.boolean()),
  pqStrictOrdering: s.optional(s.boolean()),
  pqRatePerSec: s.optional(s.float64()),
  pqMode: s.optional(s.lazy(() => mode76Schema)),
  pqMaxBufferSize: s.optional(s.float64()),
  pqMaxBackpressureSec: s.optional(s.float64()),
  pqMaxFileSize: s.optional(s.string()),
  pqMaxSize: s.optional(s.string()),
  pqPath: s.optional(s.string()),
  pqCompress: s.optional(s.lazy(() => compressionSchema)),
  pqOnBackpressure: s.optional(s.lazy(() => queueFullBehavior62Schema)),
  pqMaxBufferSizeBytes: s.optional(s.string()),
  pqControls: s.optional(s.record(s.string(), s.unknown())),
  templateStreamtags: s.optional(s.string()),
  templateHost: s.optional(s.string()),
  templatePort: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  _keysMap: {
    templateStreamtags: "__template_streamtags",
    templateHost: "__template_host",
    templatePort: "__template_port",
    templateOnBackpressure: "__template_onBackpressure",
  },
});
