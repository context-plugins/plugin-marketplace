import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reason2Schema, type Reason2 } from "./reason2.js";

export type UnsuccessfulFaceDisassociation = {
  /** A unique identifier assigned to the face. */
  faceId?: string;
  /** A provided ID for the UserID. Unique within the collection. */
  userId?: string;
  /** The reason why the deletion was unsuccessful. */
  reasons?: Reason2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unsuccessfulFaceDisassociationSchema: Schema<UnsuccessfulFaceDisassociation> =
  s.object<UnsuccessfulFaceDisassociation>(
    {
      faceId: s.optional(s.string()),
      userId: s.optional(s.string()),
      reasons: s.optional(s.array(s.lazy(() => reason2Schema))),
      _keysMap: {
        faceId: "FaceId",
        userId: "UserId",
        reasons: "Reasons",
      },
    },
    { additionalProperties: s.json() },
  );
