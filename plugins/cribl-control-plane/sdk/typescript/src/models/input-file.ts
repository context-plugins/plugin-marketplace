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
import { mode13Schema, type Mode13 } from "./mode13.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";

export type InputFile = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "file" */
  type?: "file";
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
  /** Choose how to discover files to monitor */
  mode?: Mode13;
  /** Time, in seconds, between scanning for files */
  interval?: number;
  /** The full path of discovered files are matched against this wildcard list */
  filenames?: string[];
  /** Apply filename allowlist to file entries in archive file types, like tar or zip. */
  filterArchivedFiles?: boolean;
  /**
   * Read only new entries at the end of all files discovered at next startup. \@{product} will then
   * read newly discovered files from the head. Disable this to resume reading all files from head.
   */
  tailOnly?: boolean;
  /** Time, in seconds, before an idle file is closed */
  idleTimeout?: number;
  /**
   * The minimum age of files to monitor. Format examples: 30s, 15m, 1h. Age is relative to file
   * modification time. Leave empty to apply no age filters.
   */
  minAgeDur?: string;
  /**
   * The maximum age of event timestamps to collect. Format examples: 60s, 4h, 3d, 1w. Can be used
   * in conjuction with "Check file modification times". Leave empty to apply no age filters.
   */
  maxAgeDur?: string;
  /** Skip files with modification times earlier than the maximum age duration */
  checkFileModTime?: boolean;
  /** Forces files containing binary data to be streamed as text */
  forceText?: boolean;
  /**
   * Length of file header bytes to use in hash for unique file identification. Values above 16384
   * may cause issues with re-ingesting files.
   */
  hashLen?: number;
  /** Load balance traffic across all Worker Processes */
  enableLoadBalancing?: boolean;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * When enabled, no Event Breaker channel flush timeout applies and the timeout below is ignored.
   * Prefer this option when using header-based breakers for file types such as CSV or IIS.
   */
  disableStaleChannelFlush?: boolean;
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /**
   * Detect the datatype of each event and extract its top-level fields before the data reaches any
   * of the processing pipelines (pre-processing, main processing, post-processing).
   */
  autoParse?: boolean;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * Directory path to search for files. Environment variables will be resolved (example:
   * $CRIBL_HOME/log/).
   */
  path?: string;
  /**
   * Set how many subdirectories deep to search. Use 0 to search only files in the given path, 1 to
   * also look in its immediate subdirectories, etc. Leave it empty for unlimited depth.
   */
  depth?: number;
  /** Suppress errors when search path does not exist */
  suppressMissingPathErrors?: boolean;
  /** Delete files after they have been collected */
  deleteFiles?: boolean;
  /**
   * Salt the file hash with the Source file path. Ensures that all files with the same header hash,
   * such as CSV files, are ingested. Moving or renaming the file, or toggling this after starting
   * the Source will cause re-ingestion.
   */
  saltHash?: boolean;
  /**
   * Skip rescans of unchanged directories based on directory modification time. Uses an exponential
   * backoff strategy, reducing load on the filesystems, but possibly delaying detection of new
   * data. This option is optimized for search paths where files exist in the leaf directories.
   */
  optimizeLeafDirectories?: boolean;
  /** When enabled, discovery will throttle CPU usage to the configured target percentage. */
  enableDiscoveryThrottle?: boolean;
  /**
   * Target CPU utilization percentage during file discovery. Discovery alternates between work and
   * yield periods within a 200ms cycle. For example, 25% processes entries for 50ms then yields for
   * 150ms. Lower values reduce CPU usage at the cost of longer discovery times.
   */
  discoveryThrottleCpuPercent?: number;
  /** Stream binary files as Base64-encoded chunks */
  includeUnidentifiableBinary?: boolean;
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

export const inputFileSchema: Schema<InputFile> = s.object<InputFile>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("file"), "file"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  mode: s.optional(s.lazy(() => mode13Schema)),
  interval: s.optional(s.float64()),
  filenames: s.optional(s.array(s.string())),
  filterArchivedFiles: s.optional(s.boolean()),
  tailOnly: s.optional(s.boolean()),
  idleTimeout: s.optional(s.float64()),
  minAgeDur: s.optional(s.string()),
  maxAgeDur: s.optional(s.string()),
  checkFileModTime: s.optional(s.boolean()),
  forceText: s.optional(s.boolean()),
  hashLen: s.optional(s.float64()),
  enableLoadBalancing: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  breakerRulesets: s.optional(s.array(s.string())),
  disableStaleChannelFlush: s.optional(s.boolean()),
  staleChannelFlushMs: s.optional(s.float64()),
  autoParse: s.optional(s.boolean()),
  description: s.optional(s.string()),
  path: s.optional(s.string()),
  depth: s.optional(s.float64()),
  suppressMissingPathErrors: s.optional(s.boolean()),
  deleteFiles: s.optional(s.boolean()),
  saltHash: s.optional(s.boolean()),
  optimizeLeafDirectories: s.optional(s.boolean()),
  enableDiscoveryThrottle: s.optional(s.boolean()),
  discoveryThrottleCpuPercent: s.optional(s.float64()),
  includeUnidentifiableBinary: s.optional(s.boolean()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
  },
});
