import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeAmazonRekognitionFaceLivenessApiSchema,
  type TypeAmazonRekognitionFaceLivenessApi,
} from "./type-amazon-rekognition-face-liveness-api.js";

export type Challenge = {
  /** The type of the challenge being used for the Face Liveness session. */
  type: TypeAmazonRekognitionFaceLivenessApi;
  /** The version of the challenge being used for the Face Liveness session. */
  version: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const challengeSchema: Schema<Challenge> = s.object<Challenge>(
  {
    type: typeAmazonRekognitionFaceLivenessApiSchema,
    version: s.string(),
    _keysMap: {
      type: "Type",
      version: "Version",
    },
  },
  { additionalProperties: s.json() },
);
