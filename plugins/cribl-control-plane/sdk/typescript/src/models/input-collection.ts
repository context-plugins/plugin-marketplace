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
import { preprocessTypeSchema, type PreprocessType } from "./preprocess-type.js";

/**
 * Input settings for a collection job, including event breaking, routing, and preprocessing
 * options.
 */
export type InputCollection = {
  /** Unique ID for this input */
  id?: string;
  /** Resource type identifier. @default "collection" */
  type?: "collection";
  /** If true, the Source is disabled and will not collect data. */
  disabled?: boolean;
  /** Pipeline to process results */
  pipeline?: string;
  /**
   * Send events to normal routing and event processing. Disable to select a specific
   * Pipeline/Destination combination.
   */
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
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /**
   * Optional preprocessing step that pipes collected data through an external command before
   * ingestion.
   */
  preprocess?: PreprocessType;
  /**
   * Rate (in bytes per second) to throttle while writing to an output. Accepts values with
   * multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no
   * throttling.
   */
  throttleRatePerSec?: string;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** Destination to send results to */
  output?: string;
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

export const inputCollectionSchema: Schema<InputCollection> = s.object<InputCollection>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("collection"), "collection"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  breakerRulesets: s.optional(s.array(s.string())),
  staleChannelFlushMs: s.optional(s.float64()),
  preprocess: s.optional(s.lazy(() => preprocessTypeSchema)),
  throttleRatePerSec: s.optional(s.string()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  output: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
  },
});
