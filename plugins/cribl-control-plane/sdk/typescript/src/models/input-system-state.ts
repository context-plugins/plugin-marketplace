import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectorsSchema, type Collectors } from "./collectors.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { persistence1Schema, type Persistence1 } from "./persistence1.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";

export type InputSystemState = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "system_state" */
  type?: "system_state";
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
   * Time, in seconds, between consecutive state collections. Default is 300 seconds (5 minutes).
   */
  interval?: number;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** System state collectors to enable and configure. */
  collectors?: Collectors;
  /** Disk spooling settings for collected system state data. */
  persistence?: Persistence1;
  /**
   * Enable to use built-in tools (PowerShell) to collect events instead of native API (default)
   * [Learn more](https://docs.cribl.io/edge/sources-system-state/#advanced-tab)
   */
  disableNativeModule?: boolean;
  /**
   * Enable only to collect LastLog data via legacy implementation. This option will be removed in a
   * future release. Please contact Support before enabling. [Learn
   * more](https://docs.cribl.io/edge/sources-system-state/#advanced-tab)
   */
  disableNativeLastLogModule?: boolean;
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

export const inputSystemStateSchema: Schema<InputSystemState> = s.object<InputSystemState>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("system_state"), "system_state"),
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
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  collectors: s.optional(s.lazy(() => collectorsSchema)),
  persistence: s.optional(s.lazy(() => persistence1Schema)),
  disableNativeModule: s.optional(s.boolean()),
  disableNativeLastLogModule: s.optional(s.boolean()),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
  },
});
