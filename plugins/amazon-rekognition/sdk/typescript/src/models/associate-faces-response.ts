import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { associatedFaceSchema, type AssociatedFace } from "./associated-face.js";
import {
  unsuccessfulFaceAssociationSchema,
  type UnsuccessfulFaceAssociation,
} from "./unsuccessful-face-association.js";
import { userStatusSchema, type UserStatus } from "./user-status.js";

export type AssociateFacesResponse = {
  /**
   * An array of AssociatedFace objects containing FaceIDs that have been successfully associated
   * with the UserID. Returned if the AssociateFaces action is successful.
   */
  associatedFaces?: AssociatedFace[];
  /**
   * An array of UnsuccessfulAssociation objects containing FaceIDs that are not successfully
   * associated along with the reasons. Returned if the AssociateFaces action is successful.
   */
  unsuccessfulFaceAssociations?: UnsuccessfulFaceAssociation[];
  /**
   * The status of an update made to a UserID. Reflects if the UserID has been updated for every
   * requested change.
   */
  userStatus?: UserStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associateFacesResponseSchema: Schema<AssociateFacesResponse> = s.object<AssociateFacesResponse>(
  {
    associatedFaces: s.optional(s.array(s.lazy(() => associatedFaceSchema))),
    unsuccessfulFaceAssociations: s.optional(s.array(s.lazy(() => unsuccessfulFaceAssociationSchema))),
    userStatus: s.optional(s.lazy(() => userStatusSchema)),
    _keysMap: {
      associatedFaces: "AssociatedFaces",
      unsuccessfulFaceAssociations: "UnsuccessfulFaceAssociations",
      userStatus: "UserStatus",
    },
  },
  { additionalProperties: s.json() },
);
