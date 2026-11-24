import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Runtime configuration for the Spec Generation add-on. All fields are proto3 primitives (bool,
 * string, double) rather than google.protobuf.*Value wrappers because the runtime consumer
 * deserializes the JSON via Gson field reflection with no registered type adapters. Wrapper types
 * would serialize as JSON objects/null that Gson cannot bind to Java primitive fields.
 */
export type GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfig = {
  /**
   * Full Pub/Sub topic path in the Apigee Runtime Tenant Project where the Schema Inferring Engine
   * publishes inferred ApiObservation messages. Format: projects/{project}/topics/{topic}. Same
   * sentinel semantics as raw_observations_pubsub_topic. Default: empty string.
   */
  apiObservationsPubsubTopic?: string;
  /** Whether the Spec Generation add-on is active for this environment. Default: false. */
  enabled?: boolean;
  /**
   * Full Pub/Sub topic path in the Apigee Runtime Tenant Project where the message processor
   * publishes captured RawObservation messages. Format: projects/{project}/topics/{topic}. Empty
   * string is the "not configured" sentinel; the consumer short-circuits publishing when empty.
   * Default: empty string.
   */
  rawObservationsPubsubTopic?: string;
  /**
   * Fraction of eligible transactions to capture, in [0.0, 1.0]. The consumer enforces an internal
   * upper-bound clamp independently of this field. Default: 0.0 (omitted from JSON per proto3
   * default-scalar-omission; the consumer's field initializer supplies the effective 0.01
   * fallback).
   */
  samplingRate?: number;
  /**
   * ISO-8601 timestamp until which Spec Generation remains active (e.g. "2026-12-31T23:59:59Z").
   * Empty string is the canonical "not configured" sentinel and MUST be treated by the consumer as
   * "expired" (short-circuit before parsing). Default: empty string.
   */
  enabledUntil?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RuntimeSpecGenerationAddonConfigSchema: Schema<GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfig> =
  s.object<GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfig>(
    {
      apiObservationsPubsubTopic: s.optional(s.string()),
      enabled: s.optional(s.boolean()),
      rawObservationsPubsubTopic: s.optional(s.string()),
      samplingRate: s.optional(s.float64()),
      enabledUntil: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
