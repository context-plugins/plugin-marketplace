import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceSchema, type Face } from "./face.js";

export type ListFacesResponse = {
  /** An array of Face objects. */
  faces?: Face[];
  /**
   * If the response is truncated, Amazon Rekognition returns this token that you can use in the
   * subsequent request to retrieve the next set of faces.
   */
  nextToken?: string;
  /**
   * Version number of the face detection model associated with the input collection (CollectionId).
   */
  faceModelVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFacesResponseSchema: Schema<ListFacesResponse> = s.object<ListFacesResponse>(
  {
    faces: s.optional(s.array(s.lazy(() => faceSchema))),
    nextToken: s.optional(s.string()),
    faceModelVersion: s.optional(s.string()),
    _keysMap: {
      faces: "Faces",
      nextToken: "NextToken",
      faceModelVersion: "FaceModelVersion",
    },
  },
  { additionalProperties: s.json() },
);
