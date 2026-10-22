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
import { readMode1Schema, type ReadMode1 } from "./read-mode1.js";

export type InputAppleUnifiedLogs = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "apple_unified_logs" */
  type?: "apple_unified_logs";
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
   * String to filter log entries, in NSPredicate format (e.g., subsystem == "com.apple.security" or
   * process == "kernel"). See [Common Log Types and
   * Predicates](https://docs.cribl.io/edge/sources-apple-unified-logs/#examples) for more
   * information.
   */
  predicate: string;
  /** Read all log entries (historical and upcoming), or only upcoming, from the last entry */
  readMode?: ReadMode1;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
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
};

export const inputAppleUnifiedLogsSchema: Schema<InputAppleUnifiedLogs> = s.object<InputAppleUnifiedLogs>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("apple_unified_logs"), "apple_unified_logs"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  predicate: s.string(),
  readMode: s.optional(s.lazy(() => readMode1Schema)),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
  },
});
