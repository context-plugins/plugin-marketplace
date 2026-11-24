import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1AmazonRekognitionProjectApiSchema,
  type Status1AmazonRekognitionProjectApi,
} from "./status1-amazon-rekognition-project-api.js";

export type DeleteProjectResponse = {
  /** The current status of the delete project operation. */
  status?: Status1AmazonRekognitionProjectApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteProjectResponseSchema: Schema<DeleteProjectResponse> = s.object<DeleteProjectResponse>(
  {
    status: s.optional(s.lazy(() => status1AmazonRekognitionProjectApiSchema)),
    _keysMap: {
      status: "Status",
    },
  },
  { additionalProperties: s.json() },
);
