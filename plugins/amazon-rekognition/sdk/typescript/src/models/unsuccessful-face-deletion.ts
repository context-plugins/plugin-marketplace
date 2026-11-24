import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reason1Schema, type Reason1 } from "./reason1.js";

export type UnsuccessfulFaceDeletion = {
  /** A unique identifier assigned to the face. */
  faceId?: string;
  /** A provided ID for the UserID. Unique within the collection. */
  userId?: string;
  /** The reason why the deletion was unsuccessful. */
  reasons?: Reason1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unsuccessfulFaceDeletionSchema: Schema<UnsuccessfulFaceDeletion> =
  s.object<UnsuccessfulFaceDeletion>(
    {
      faceId: s.optional(s.string()),
      userId: s.optional(s.string()),
      reasons: s.optional(s.array(s.lazy(() => reason1Schema))),
      _keysMap: {
        faceId: "FaceId",
        userId: "UserId",
        reasons: "Reasons",
      },
    },
    { additionalProperties: s.json() },
  );
