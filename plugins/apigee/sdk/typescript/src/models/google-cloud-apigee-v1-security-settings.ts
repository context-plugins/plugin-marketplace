import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** SecuritySettings reflects the current state of the SecuritySettings feature. */
export type GoogleCloudApigeeV1SecuritySettings = {
  /** Optional. If true the user consents to the use of ML models for Abuse detection. */
  mlRetrainingFeedbackEnabled?: boolean;
  /** Identifier. Full resource name is always `organizations/{org}/securitySettings`. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecuritySettingsSchema: Schema<GoogleCloudApigeeV1SecuritySettings> =
  s.object<GoogleCloudApigeeV1SecuritySettings>(
    {
      mlRetrainingFeedbackEnabled: s.optional(s.boolean()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
