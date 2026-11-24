import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1AmazonRekognitionFaceLivenessApiSchema,
  type Type1AmazonRekognitionFaceLivenessApi,
} from "./type1-amazon-rekognition-face-liveness-api.js";
import { versionsSchema, type Versions } from "./versions.js";

export type ChallengePreference = {
  /** The types of challenges that have been selected for the Face Liveness session. */
  type: Type1AmazonRekognitionFaceLivenessApi;
  versions?: Versions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const challengePreferenceSchema: Schema<ChallengePreference> = s.object<ChallengePreference>(
  {
    type: type1AmazonRekognitionFaceLivenessApiSchema,
    versions: s.optional(s.lazy(() => versionsSchema)),
    _keysMap: {
      type: "Type",
      versions: "Versions",
    },
  },
  { additionalProperties: s.json() },
);
