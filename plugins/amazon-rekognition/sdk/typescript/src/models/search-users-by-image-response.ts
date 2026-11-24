import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { searchedFaceDetailsSchema, type SearchedFaceDetails } from "./searched-face-details.js";
import { unsearchedFaceSchema, type UnsearchedFace } from "./unsearched-face.js";
import { userMatchSchema, type UserMatch } from "./user-match.js";

export type SearchUsersByImageResponse = {
  /**
   * An array of UserID objects that matched the input face, along with the confidence in the match.
   * The returned structure will be empty if there are no matches. Returned if the
   * SearchUsersByImageResponse action is successful.
   */
  userMatches?: UserMatch[];
  /**
   * Version number of the face detection model associated with the input collection CollectionId.
   */
  faceModelVersion?: string;
  searchedFace?: SearchedFaceDetails;
  /**
   * List of UnsearchedFace objects. Contains the face details infered from the specified image but
   * not used for search. Contains reasons that describe why a face wasn't used for Search.
   */
  unsearchedFaces?: UnsearchedFace[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchUsersByImageResponseSchema: Schema<SearchUsersByImageResponse> =
  s.object<SearchUsersByImageResponse>(
    {
      userMatches: s.optional(s.array(s.lazy(() => userMatchSchema))),
      faceModelVersion: s.optional(s.string()),
      searchedFace: s.optional(s.lazy(() => searchedFaceDetailsSchema)),
      unsearchedFaces: s.optional(s.array(s.lazy(() => unsearchedFaceSchema))),
      _keysMap: {
        userMatches: "UserMatches",
        faceModelVersion: "FaceModelVersion",
        searchedFace: "SearchedFace",
        unsearchedFaces: "UnsearchedFaces",
      },
    },
    { additionalProperties: s.json() },
  );
