import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status2AmazonRekognitionProjectVersionApiSchema,
  type Status2AmazonRekognitionProjectVersionApi,
} from "./status2-amazon-rekognition-project-version-api.js";

export type StartProjectVersionResponse = {
  /** The current running status of the model. */
  status?: Status2AmazonRekognitionProjectVersionApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startProjectVersionResponseSchema: Schema<StartProjectVersionResponse> =
  s.object<StartProjectVersionResponse>(
    {
      status: s.optional(s.lazy(() => status2AmazonRekognitionProjectVersionApiSchema)),
      _keysMap: {
        status: "Status",
      },
    },
    { additionalProperties: s.json() },
  );
