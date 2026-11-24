import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { challengePreferenceSchema, type ChallengePreference } from "./challenge-preference.js";
import { livenessOutputConfigSchema, type LivenessOutputConfig } from "./liveness-output-config.js";

export type CreateFaceLivenessSessionRequestSettings = {
  outputConfig?: LivenessOutputConfig;
  /**
   * Number of audit images to be returned back. Takes an integer between 0-4. Any integer less than
   * 0 will return 0, any integer above 4 will return 4 images in the response. By default, it is
   * set to 0. The limit is best effort and is based on the actual duration of the selfie-video.
   */
  auditImagesLimit?: number;
  /**
   * Indicates preferred challenge types and versions for the Face Liveness session to be created.
   */
  challengePreferences?: ChallengePreference[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createFaceLivenessSessionRequestSettingsSchema: Schema<CreateFaceLivenessSessionRequestSettings> =
  s.object<CreateFaceLivenessSessionRequestSettings>(
    {
      outputConfig: s.optional(s.lazy(() => livenessOutputConfigSchema)),
      auditImagesLimit: s.optional(s.int()),
      challengePreferences: s.optional(s.array(s.lazy(() => challengePreferenceSchema))),
      _keysMap: {
        outputConfig: "OutputConfig",
        auditImagesLimit: "AuditImagesLimit",
        challengePreferences: "ChallengePreferences",
      },
    },
    { additionalProperties: s.json() },
  );
