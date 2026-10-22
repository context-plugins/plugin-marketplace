import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { eventFormatSchema, type EventFormat } from "./event-format.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { readModeSchema, type ReadMode } from "./read-mode.js";

export type InputWinEventLogs = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "win_event_logs" */
  type?: "win_event_logs";
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
   * Enter the event logs to collect. Run "Get-WinEvent -ListLog *" in PowerShell to see the
   * available logs.
   */
  logNames: string[];
  /**
   * When enabled, missing event log channels will not cause the Source to report errors. Use in
   * Fleets where some hosts may not have all configured event logs.
   */
  suppressMissingLogErrors?: boolean;
  /** Read all stored and future event logs, or only future events */
  readMode?: ReadMode;
  /** Format of individual events */
  eventFormat?: EventFormat;
  /**
   * Enable to use built-in tools (PowerShell for JSON, wevtutil for XML) to collect event logs
   * instead of native API (default) [Learn
   * more](https://docs.cribl.io/edge/sources-windows-event-logs/#advanced-settings)
   */
  disableNativeModule?: boolean;
  /**
   * Time, in seconds, between checking for new entries (Applicable for pre-4.8.0 nodes that use
   * Windows Tools)
   */
  interval?: number;
  /**
   * The maximum number of events to read in one polling interval. A batch size higher than 500 can
   * cause delays when pulling from multiple event logs. (Applicable for pre-4.8.0 nodes that use
   * Windows Tools)
   */
  batchSize?: number;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** The maximum number of bytes in an event before it is flushed to the pipelines */
  maxEventBytes?: number;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * Enable/disable the rendering of localized event message strings (Applicable for 4.8.0 nodes and
   * newer that use the Native API)
   */
  disableJsonRendering?: boolean;
  /** Preserve fields with empty values (such as '-') in the JSON output instead of omitting them */
  includeEmptyJsonFields?: boolean;
  /**
   * Resolve Windows message table parameter codes (%%NNNN) in EventData fields to their
   * human-readable strings (for example: %%14592 → Inbound)
   */
  resolveParameterCodes?: boolean;
  /**
   * Enable/disable the rendering of localized event message strings (Applicable for 4.8.0 nodes and
   * newer that use the Native API)
   */
  disableXmlRendering?: boolean;
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
};

export const inputWinEventLogsSchema: Schema<InputWinEventLogs> = s.object<InputWinEventLogs>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("win_event_logs"), "win_event_logs"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  logNames: s.array(s.string()),
  suppressMissingLogErrors: s.optional(s.boolean()),
  readMode: s.optional(s.lazy(() => readModeSchema)),
  eventFormat: s.optional(s.lazy(() => eventFormatSchema)),
  disableNativeModule: s.optional(s.boolean()),
  interval: s.optional(s.float64()),
  batchSize: s.optional(s.float64()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  maxEventBytes: s.optional(s.int()),
  description: s.optional(s.string()),
  disableJsonRendering: s.optional(s.boolean()),
  includeEmptyJsonFields: s.optional(s.boolean()),
  resolveParameterCodes: s.optional(s.boolean()),
  disableXmlRendering: s.optional(s.boolean()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
  },
});
