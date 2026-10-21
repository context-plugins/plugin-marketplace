import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import {
  googleAuthenticationMethodSchema,
  type GoogleAuthenticationMethod,
} from "./google-authentication-method.js";
import {
  logLabelConfOutputGoogleCloudLoggingSchema,
  type LogLabelConfOutputGoogleCloudLogging,
} from "./log-label-conf-output-google-cloud-logging.js";
import { logLocationTypeSchema, type LogLocationType } from "./log-location-type.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { payloadFormatSchema, type PayloadFormat } from "./payload-format.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";

export type OutputGoogleCloudLogging = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "google_cloud_logging" */
  type?: "google_cloud_logging";
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
  /** Log location type */
  logLocationType: LogLocationType;
  /**
   * JavaScript expression to compute the value of the log name. If Validate and correct log name is
   * enabled, invalid characters (characters other than alphanumerics, forward-slashes, underscores,
   * hyphens, and periods) will be replaced with an underscore.
   */
  logNameExpression: string;
  /** Validate and correct log name */
  sanitizeLogNames?: boolean;
  /** Format to use when sending payload. Defaults to Text. */
  payloadFormat?: PayloadFormat;
  /** Labels to apply to the log entry */
  logLabels?: LogLabelConfOutputGoogleCloudLogging[];
  /**
   * JavaScript expression to compute the value of the managed resource type field. Must evaluate to
   * one of the valid values
   * [here](https://cloud.google.com/logging/docs/api/v2/resource-list#resource-types). Defaults to
   * "global".
   */
  resourceTypeExpression?: string;
  /**
   * Labels to apply to the managed resource. These must correspond to the valid labels for the
   * specified resource type (see
   * [here](https://cloud.google.com/logging/docs/api/v2/resource-list#resource-types)). Otherwise,
   * they will be dropped by Google Cloud Logging.
   */
  resourceTypeLabels?: LogLabelConfOutputGoogleCloudLogging[];
  /**
   * JavaScript expression to compute the value of the severity field. Must evaluate to one of the
   * severity values supported by Google Cloud Logging
   * [here](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity) (case
   * insensitive). Defaults to "DEFAULT".
   */
  severityExpression?: string;
  /** JavaScript expression to compute the value of the insert ID field. */
  insertIdExpression?: string;
  /**
   * Choose Auto to use Google Application Default Credentials (ADC), Manual to enter Google service
   * account credentials directly, or Secret to select or create a stored secret that references
   * Google service account credentials.
   */
  googleAuthMethod?: GoogleAuthenticationMethod;
  /**
   * Contents of service account credentials (JSON keys) file downloaded from Google Cloud. To
   * upload a file, click the upload button at this field's upper right.
   */
  serviceAccountCredentials?: string;
  /** Select or create a stored text secret */
  secret?: string;
  /** Maximum size, in KB, of the request body. */
  maxPayloadSizeKb?: number;
  /** Max number of events to include in the request body. Default is 0 (unlimited). */
  maxPayloadEvents?: number;
  /**
   * Maximum time between requests. Small values could cause the payload size to be smaller than the
   * configured Max record size.
   */
  flushPeriodSec?: number;
  /** Maximum number of ongoing requests before blocking. */
  concurrency?: number;
  /** Amount of time (milliseconds) to wait for the connection to establish before retrying */
  connectionTimeout?: number;
  /** Amount of time, in seconds, to wait for a request to complete before canceling it. */
  timeoutSec?: number;
  /** Maximum number of requests to limit to per second. */
  throttleRateReqPerSec?: number;
  /**
   * A JavaScript expression that evaluates to the HTTP request method as a string. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  requestMethodExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request URL as a string. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  requestUrlExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request size as a string, in int64 format.
   * See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  requestSizeExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request method as a number. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  statusExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP response size as a string, in int64 format.
   * See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  responseSizeExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request user agent as a string. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  userAgentExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request remote IP as a string. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  remoteIpExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request server IP as a string. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  serverIpExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request referer as a string. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  refererExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request latency, formatted as
   * <seconds>.<nanoseconds>s (for example, 1.23s). See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  latencyExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request cache lookup as a boolean. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  cacheLookupExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request cache hit as a boolean. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  cacheHitExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request cache validated with origin server
   * as a boolean. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  cacheValidatedExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request cache fill bytes as a string, in
   * int64 format. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  cacheFillBytesExpression?: string;
  /**
   * A JavaScript expression that evaluates to the HTTP request protocol as a string. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest)
   * for details.
   */
  protocolExpression?: string;
  /**
   * A JavaScript expression that evaluates to the log entry operation ID as a string. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logentryoperation)
   * for details.
   */
  idExpression?: string;
  /**
   * A JavaScript expression that evaluates to the log entry operation producer as a string. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logentryoperation)
   * for details.
   */
  producerExpression?: string;
  /**
   * A JavaScript expression that evaluates to the log entry operation first flag as a boolean. See
   * the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logentryoperation)
   * for details.
   */
  firstExpression?: string;
  /**
   * A JavaScript expression that evaluates to the log entry operation last flag as a boolean. See
   * the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logentryoperation)
   * for details.
   */
  lastExpression?: string;
  /**
   * A JavaScript expression that evaluates to the log entry source location file as a string. See
   * the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logentrysourcelocation)
   * for details.
   */
  fileExpression?: string;
  /**
   * A JavaScript expression that evaluates to the log entry source location line as a string, in
   * int64 format. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logentrysourcelocation)
   * for details.
   */
  lineExpression?: string;
  /**
   * A JavaScript expression that evaluates to the log entry source location function as a string.
   * See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logentrysourcelocation)
   * for details.
   */
  functionExpression?: string;
  /**
   * A JavaScript expression that evaluates to the log entry log split UID as a string. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logsplit)
   * for details.
   */
  uidExpression?: string;
  /**
   * A JavaScript expression that evaluates to the log entry log split index as a number. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logsplit)
   * for details.
   */
  indexExpression?: string;
  /**
   * A JavaScript expression that evaluates to the log entry log split total splits as a number. See
   * the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logsplit)
   * for details.
   */
  totalSplitsExpression?: string;
  /**
   * A JavaScript expression that evaluates to the REST resource name of the trace being written as
   * a string. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry) for
   * details.
   */
  traceExpression?: string;
  /**
   * A JavaScript expression that evaluates to the ID of the cloud trace span associated with the
   * current operation in which the log is being written as a string. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry) for
   * details.
   */
  spanIdExpression?: string;
  /**
   * A JavaScript expression that evaluates to the the sampling decision of the span associated with
   * the log entry. See the
   * [documentation](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry) for
   * details.
   */
  traceSampledExpression?: string;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /**
   * Maximum total size of the batches waiting to be sent. If left blank, defaults to 5 times the
   * max body size (if set). If 0, no limit is enforced.
   */
  totalMemoryLimitKb?: number;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * JavaScript expression to compute the value of the folder ID with which log entries should be
   * associated. If Validate and correct log name is enabled, invalid characters (characters other
   * than alphanumerics, forward-slashes, underscores, hyphens, and periods) will be replaced with
   * an underscore.
   */
  logLocationExpression: string;
  /**
   * JavaScript expression to compute the value of the payload. Must evaluate to a JavaScript object
   * value. If an invalid value is encountered it will result in the default value instead. Defaults
   * to the entire event.
   */
  payloadExpression?: string;
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
   * Binds 'logLocationType' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'logLocationType' at runtime.
   */
  templateLogLocationType?: string;
  /**
   * Binds 'logNameExpression' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'logNameExpression' at runtime.
   */
  templateLogNameExpression?: string;
  /**
   * Binds 'payloadFormat' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'payloadFormat' at runtime.
   */
  templatePayloadFormat?: string;
  /**
   * Binds 'resourceTypeExpression' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'resourceTypeExpression' at runtime.
   */
  templateResourceTypeExpression?: string;
  /**
   * Binds 'severityExpression' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'severityExpression' at runtime.
   */
  templateSeverityExpression?: string;
  /**
   * Binds 'insertIdExpression' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'insertIdExpression' at runtime.
   */
  templateInsertIdExpression?: string;
  /**
   * Binds 'traceExpression' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'traceExpression' at runtime.
   */
  templateTraceExpression?: string;
  /**
   * Binds 'spanIdExpression' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'spanIdExpression' at runtime.
   */
  templateSpanIdExpression?: string;
  /**
   * Binds 'traceSampledExpression' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'traceSampledExpression' at runtime.
   */
  templateTraceSampledExpression?: string;
  /**
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
  /**
   * Binds 'logLocationExpression' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'logLocationExpression' at runtime.
   */
  templateLogLocationExpression?: string;
  /**
   * Binds 'payloadExpression' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'payloadExpression' at runtime.
   */
  templatePayloadExpression?: string;
};

export const outputGoogleCloudLoggingSchema: Schema<OutputGoogleCloudLogging> =
  s.object<OutputGoogleCloudLogging>({
    id: s.optional(s.string()),
    type: s.defaulted(s.literal("google_cloud_logging"), "google_cloud_logging"),
    pipeline: s.optional(s.string()),
    systemFields: s.optional(s.array(s.string())),
    environment: s.optional(s.string()),
    streamtags: s.optional(s.array(s.string())),
    logLocationType: logLocationTypeSchema,
    logNameExpression: s.string(),
    sanitizeLogNames: s.optional(s.boolean()),
    payloadFormat: s.optional(s.lazy(() => payloadFormatSchema)),
    logLabels: s.optional(s.array(s.lazy(() => logLabelConfOutputGoogleCloudLoggingSchema))),
    resourceTypeExpression: s.optional(s.string()),
    resourceTypeLabels: s.optional(s.array(s.lazy(() => logLabelConfOutputGoogleCloudLoggingSchema))),
    severityExpression: s.optional(s.string()),
    insertIdExpression: s.optional(s.string()),
    googleAuthMethod: s.optional(s.lazy(() => googleAuthenticationMethodSchema)),
    serviceAccountCredentials: s.optional(s.string()),
    secret: s.optional(s.string()),
    maxPayloadSizeKb: s.optional(s.float64()),
    maxPayloadEvents: s.optional(s.float64()),
    flushPeriodSec: s.optional(s.float64()),
    concurrency: s.optional(s.float64()),
    connectionTimeout: s.optional(s.float64()),
    timeoutSec: s.optional(s.float64()),
    throttleRateReqPerSec: s.optional(s.int()),
    requestMethodExpression: s.optional(s.string()),
    requestUrlExpression: s.optional(s.string()),
    requestSizeExpression: s.optional(s.string()),
    statusExpression: s.optional(s.string()),
    responseSizeExpression: s.optional(s.string()),
    userAgentExpression: s.optional(s.string()),
    remoteIpExpression: s.optional(s.string()),
    serverIpExpression: s.optional(s.string()),
    refererExpression: s.optional(s.string()),
    latencyExpression: s.optional(s.string()),
    cacheLookupExpression: s.optional(s.string()),
    cacheHitExpression: s.optional(s.string()),
    cacheValidatedExpression: s.optional(s.string()),
    cacheFillBytesExpression: s.optional(s.string()),
    protocolExpression: s.optional(s.string()),
    idExpression: s.optional(s.string()),
    producerExpression: s.optional(s.string()),
    firstExpression: s.optional(s.string()),
    lastExpression: s.optional(s.string()),
    fileExpression: s.optional(s.string()),
    lineExpression: s.optional(s.string()),
    functionExpression: s.optional(s.string()),
    uidExpression: s.optional(s.string()),
    indexExpression: s.optional(s.string()),
    totalSplitsExpression: s.optional(s.string()),
    traceExpression: s.optional(s.string()),
    spanIdExpression: s.optional(s.string()),
    traceSampledExpression: s.optional(s.string()),
    onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
    totalMemoryLimitKb: s.optional(s.float64()),
    description: s.optional(s.string()),
    logLocationExpression: s.string(),
    payloadExpression: s.optional(s.string()),
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
    templateLogLocationType: s.optional(s.string()),
    templateLogNameExpression: s.optional(s.string()),
    templatePayloadFormat: s.optional(s.string()),
    templateResourceTypeExpression: s.optional(s.string()),
    templateSeverityExpression: s.optional(s.string()),
    templateInsertIdExpression: s.optional(s.string()),
    templateTraceExpression: s.optional(s.string()),
    templateSpanIdExpression: s.optional(s.string()),
    templateTraceSampledExpression: s.optional(s.string()),
    templateOnBackpressure: s.optional(s.string()),
    templateLogLocationExpression: s.optional(s.string()),
    templatePayloadExpression: s.optional(s.string()),
    _keysMap: {
      maxPayloadSizeKb: "maxPayloadSizeKB",
      totalMemoryLimitKb: "totalMemoryLimitKB",
      templateStreamtags: "__template_streamtags",
      templateLogLocationType: "__template_logLocationType",
      templateLogNameExpression: "__template_logNameExpression",
      templatePayloadFormat: "__template_payloadFormat",
      templateResourceTypeExpression: "__template_resourceTypeExpression",
      templateSeverityExpression: "__template_severityExpression",
      templateInsertIdExpression: "__template_insertIdExpression",
      templateTraceExpression: "__template_traceExpression",
      templateSpanIdExpression: "__template_spanIdExpression",
      templateTraceSampledExpression: "__template_traceSampledExpression",
      templateOnBackpressure: "__template_onBackpressure",
      templateLogLocationExpression: "__template_logLocationExpression",
      templatePayloadExpression: "__template_payloadExpression",
    },
  });
