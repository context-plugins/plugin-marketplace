import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { disassociatedFaceSchema, type DisassociatedFace } from "./disassociated-face.js";
import {
  unsuccessfulFaceDisassociationSchema,
  type UnsuccessfulFaceDisassociation,
} from "./unsuccessful-face-disassociation.js";
import { userStatus1Schema, type UserStatus1 } from "./user-status1.js";

export type DisassociateFacesResponse = {
  /**
   * An array of DissociatedFace objects containing FaceIds that are successfully disassociated with
   * the UserID is returned. Returned if the DisassociatedFaces action is successful.
   */
  disassociatedFaces?: DisassociatedFace[];
  /**
   * An array of UnsuccessfulDisassociation objects containing FaceIds that are not successfully
   * associated, along with the reasons for the failure to associate. Returned if the
   * DisassociateFaces action is successful.
   */
  unsuccessfulFaceDisassociations?: UnsuccessfulFaceDisassociation[];
  /**
   * The status of an update made to a User. Reflects if the User has been updated for every
   * requested change.
   */
  userStatus?: UserStatus1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disassociateFacesResponseSchema: Schema<DisassociateFacesResponse> =
  s.object<DisassociateFacesResponse>(
    {
      disassociatedFaces: s.optional(s.array(s.lazy(() => disassociatedFaceSchema))),
      unsuccessfulFaceDisassociations: s.optional(
        s.array(s.lazy(() => unsuccessfulFaceDisassociationSchema)),
      ),
      userStatus: s.optional(s.lazy(() => userStatus1Schema)),
      _keysMap: {
        disassociatedFaces: "DisassociatedFaces",
        unsuccessfulFaceDisassociations: "UnsuccessfulFaceDisassociations",
        userStatus: "UserStatus",
      },
    },
    { additionalProperties: s.json() },
  );
