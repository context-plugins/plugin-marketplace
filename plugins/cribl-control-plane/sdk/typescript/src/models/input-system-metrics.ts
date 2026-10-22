import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { containerSchema, type Container } from "./container.js";
import { gpuTypeSchema, type GpuType } from "./gpu-type.js";
import { hostSchema, type Host } from "./host.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { persistenceSchema, type Persistence } from "./persistence.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { processTypeSchema, type ProcessType } from "./process-type.js";

export type InputSystemMetrics = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "system_metrics" */
  type?: "system_metrics";
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
  /** Time, in seconds, between consecutive metric collections. Default is 10 seconds. */
  interval?: number;
  /** Select level of detail for host metrics */
  host?: Host;
  /** Process metric collection settings. */
  process?: ProcessType;
  /** Select the level of detail for container metrics */
  container?: Container;
  /** Select the level of detail for GPU metrics */
  gpu?: GpuType;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** persistence */
  persistence?: Persistence;
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

export const inputSystemMetricsSchema: Schema<InputSystemMetrics> = s.object<InputSystemMetrics>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("system_metrics"), "system_metrics"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  interval: s.optional(s.float64()),
  host: s.optional(s.lazy(() => hostSchema)),
  process: s.optional(s.lazy(() => processTypeSchema)),
  container: s.optional(s.lazy(() => containerSchema)),
  gpu: s.optional(s.lazy(() => gpuTypeSchema)),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  persistence: s.optional(s.lazy(() => persistenceSchema)),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
  },
});
