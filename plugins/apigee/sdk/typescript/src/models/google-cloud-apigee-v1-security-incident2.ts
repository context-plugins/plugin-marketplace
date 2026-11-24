import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { observabilitySchema, type Observability } from "./observability.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";

/**
 * Required. The security incident to update. Must contain all existing populated fields of the
 * current incident.
 */
export type GoogleCloudApigeeV1SecurityIncident2 = {
  /**
   * Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser,
   * Static Content Scraper, Anomaly Detection.
   */
  detectionTypes?: string[];
  /** Optional. Indicates if the user archived this incident. */
  observability?: Observability;
  /** Optional. Display name of the security incident. */
  displayName?: string;
  /** Output only. The time when events associated with the incident were first detected. */
  firstDetectedTime?: string;
  /** Total traffic detected as part of the incident. */
  trafficCount?: string;
  /** Output only. Risk level of the incident. */
  riskLevel?: RiskLevel;
  /**
   * Immutable. Name of the security incident resource. Format:
   * organizations/{org}/environments/{environment}/securityIncidents/{incident} Example:
   * organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111
   */
  name?: string;
  /** Output only. The time when the incident observability was last changed. */
  lastObservabilityChangeTime?: string;
  /** Output only. The time when events associated with the incident were last detected. */
  lastDetectedTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityIncident2Schema: Schema<GoogleCloudApigeeV1SecurityIncident2> =
  s.object<GoogleCloudApigeeV1SecurityIncident2>(
    {
      detectionTypes: s.optional(s.array(s.string())),
      observability: s.optional(s.lazy(() => observabilitySchema)),
      displayName: s.optional(s.string()),
      firstDetectedTime: s.optional(s.string()),
      trafficCount: s.optional(s.string()),
      riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
      name: s.optional(s.string()),
      lastObservabilityChangeTime: s.optional(s.string()),
      lastDetectedTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
