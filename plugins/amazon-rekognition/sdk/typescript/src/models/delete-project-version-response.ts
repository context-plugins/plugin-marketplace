import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAmazonRekognitionProjectVersionApiSchema,
  type StatusAmazonRekognitionProjectVersionApi,
} from "./status-amazon-rekognition-project-version-api.js";

export type DeleteProjectVersionResponse = {
  /** The status of the deletion operation. */
  status?: StatusAmazonRekognitionProjectVersionApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteProjectVersionResponseSchema: Schema<DeleteProjectVersionResponse> =
  s.object<DeleteProjectVersionResponse>(
    {
      status: s.optional(s.lazy(() => statusAmazonRekognitionProjectVersionApiSchema)),
      _keysMap: {
        status: "Status",
      },
    },
    { additionalProperties: s.json() },
  );
