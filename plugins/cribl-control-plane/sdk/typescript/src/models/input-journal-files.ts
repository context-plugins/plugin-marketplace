import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { filterRule2Schema, type FilterRule2 } from "./filter-rule2.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";

export type InputJournalFiles = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "journal_files" */
  type?: "journal_files";
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
   * Directory path to search for journals. Environment variables will be resolved, e.g.
   * $CRIBL_EDGE_FS_ROOT/var/log/journal/$MACHINE_ID.
   */
  path: string;
  /** Time, in seconds, between scanning for journals. */
  interval?: number;
  /** The full path of discovered journals are matched against this wildcard list. */
  journals: string[];
  /**
   * Add rules to decide which journal objects to allow. Events are generated if no rules are given
   * or if all the rules' expressions evaluate to true.
   */
  rules?: FilterRule2[];
  /** Skip log messages that are not part of the current boot session */
  currentBoot?: boolean;
  /**
   * The maximum log message age, in duration form (e.g,: 60s, 4h, 3d, 1w). Default of no value will
   * apply no max age filters.
   */
  maxAgeDur?: string;
  /** Suppress errors when search path does not exist */
  suppressMissingPathErrors?: boolean;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /**
   * Detect the datatype of each event and extract its top-level fields before the data reaches any
   * of the processing pipelines (pre-processing, main processing, post-processing).
   */
  autoParse?: boolean;
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

export const inputJournalFilesSchema: Schema<InputJournalFiles> = s.object<InputJournalFiles>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("journal_files"), "journal_files"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  path: s.string(),
  interval: s.optional(s.float64()),
  journals: s.array(s.string()),
  rules: s.optional(s.array(s.lazy(() => filterRule2Schema))),
  currentBoot: s.optional(s.boolean()),
  maxAgeDur: s.optional(s.string()),
  suppressMissingPathErrors: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  autoParse: s.optional(s.boolean()),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
  },
});
