import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import {
  googleAuthenticationMethodSchema,
  type GoogleAuthenticationMethod,
} from "./google-authentication-method.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";

export type InputGooglePubsub = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "google_pubsub" */
  type?: "google_pubsub";
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
   * ID of the topic to receive events from. When Monitor subscription is enabled, any value may be
   * entered.
   */
  topicName: string;
  /**
   * ID of the subscription to use when receiving events. When Monitor subscription is enabled, the
   * fully qualified subscription name must be entered. Example:
   * projects/myProject/subscriptions/mySubscription
   */
  subscriptionName: string;
  /** Use when the subscription is not created by this Source and topic is not known */
  monitorSubscription?: boolean;
  /** Create topic if it does not exist */
  createTopic?: boolean;
  /** Create subscription if it does not exist */
  createSubscription?: boolean;
  /**
   * Region to retrieve messages from. Select 'default' to allow Google to auto-select the nearest
   * region. When using ordered delivery, the selected region must be allowed by message storage
   * policy.
   */
  region?: string;
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
  /**
   * If Destination exerts backpressure, this setting limits how many inbound events Stream will
   * queue for processing before it stops retrieving events
   */
  maxBacklog?: number;
  /**
   * How many streams to pull messages from at one time. Doubling the value doubles the number of
   * messages this Source pulls from the topic (if available), while consuming more CPU and memory.
   * Defaults to 5.
   */
  concurrency?: number;
  /** Pull request timeout, in milliseconds */
  requestTimeout?: number;
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
   * Receive events in the order they were added to the queue. The process sending events must have
   * ordering enabled.
   */
  orderedDelivery?: boolean;
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
   * Binds 'topicName' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'topicName' at
   * runtime.
   */
  templateTopicName?: string;
  /**
   * Binds 'subscriptionName' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'subscriptionName' at runtime.
   */
  templateSubscriptionName?: string;
  /**
   * Binds 'region' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'region' at runtime.
   */
  templateRegion?: string;
};

export const inputGooglePubsubSchema: Schema<InputGooglePubsub> = s.object<InputGooglePubsub>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("google_pubsub"), "google_pubsub"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  topicName: s.string(),
  subscriptionName: s.string(),
  monitorSubscription: s.optional(s.boolean()),
  createTopic: s.optional(s.boolean()),
  createSubscription: s.optional(s.boolean()),
  region: s.optional(s.string()),
  googleAuthMethod: s.optional(s.lazy(() => googleAuthenticationMethodSchema)),
  serviceAccountCredentials: s.optional(s.string()),
  secret: s.optional(s.string()),
  maxBacklog: s.optional(s.float64()),
  concurrency: s.optional(s.float64()),
  requestTimeout: s.optional(s.float64()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  autoParse: s.optional(s.boolean()),
  description: s.optional(s.string()),
  orderedDelivery: s.optional(s.boolean()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateTopicName: s.optional(s.string()),
  templateSubscriptionName: s.optional(s.string()),
  templateRegion: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateTopicName: "__template_topicName",
    templateSubscriptionName: "__template_subscriptionName",
    templateRegion: "__template_region",
  },
});
