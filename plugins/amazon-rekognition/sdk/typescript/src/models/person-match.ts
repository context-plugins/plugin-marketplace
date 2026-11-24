import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceMatchSchema, type FaceMatch } from "./face-match.js";
import { personDetailSchema, type PersonDetail } from "./person-detail.js";

export type PersonMatch = {
  /**
   * The time, in milliseconds from the beginning of the video, that the person was matched in the
   * video.
   */
  timestamp?: number;
  person?: PersonDetail;
  /**
   * Information about the faces in the input collection that match the face of a person in the
   * video.
   */
  faceMatches?: FaceMatch[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personMatchSchema: Schema<PersonMatch> = s.object<PersonMatch>(
  {
    timestamp: s.optional(s.int()),
    person: s.optional(s.lazy(() => personDetailSchema)),
    faceMatches: s.optional(s.array(s.lazy(() => faceMatchSchema))),
    _keysMap: {
      timestamp: "Timestamp",
      person: "Person",
      faceMatches: "FaceMatches",
    },
  },
  { additionalProperties: s.json() },
);
