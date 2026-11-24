import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type UnsuccessfulFaceAssociation = {
  /** A unique identifier assigned to the face. */
  faceId?: string;
  /** A provided ID for the UserID. Unique within the collection. */
  userId?: string;
  /**
   * Match confidence with the UserID, provides information regarding if a face association was
   * unsuccessful because it didn't meet UserMatchThreshold.
   */
  confidence?: number;
  /** The reason why the association was unsuccessful. */
  reasons?: Reason[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unsuccessfulFaceAssociationSchema: Schema<UnsuccessfulFaceAssociation> =
  s.object<UnsuccessfulFaceAssociation>(
    {
      faceId: s.optional(s.string()),
      userId: s.optional(s.string()),
      confidence: s.optional(s.float64()),
      reasons: s.optional(s.array(s.lazy(() => reasonSchema))),
      _keysMap: {
        faceId: "FaceId",
        userId: "UserId",
        confidence: "Confidence",
        reasons: "Reasons",
      },
    },
    { additionalProperties: s.json() },
  );
