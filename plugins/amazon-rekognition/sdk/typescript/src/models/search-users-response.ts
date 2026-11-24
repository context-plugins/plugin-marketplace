import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { searchedFaceSchema, type SearchedFace } from "./searched-face.js";
import { searchedUserSchema, type SearchedUser } from "./searched-user.js";
import { userMatchSchema, type UserMatch } from "./user-match.js";

export type SearchUsersResponse = {
  /**
   * An array of UserMatch objects that matched the input face along with the confidence in the
   * match. Array will be empty if there are no matches.
   */
  userMatches?: UserMatch[];
  /** Version number of the face detection model associated with the input CollectionId. */
  faceModelVersion?: string;
  searchedFace?: SearchedFace;
  searchedUser?: SearchedUser;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchUsersResponseSchema: Schema<SearchUsersResponse> = s.object<SearchUsersResponse>(
  {
    userMatches: s.optional(s.array(s.lazy(() => userMatchSchema))),
    faceModelVersion: s.optional(s.string()),
    searchedFace: s.optional(s.lazy(() => searchedFaceSchema)),
    searchedUser: s.optional(s.lazy(() => searchedUserSchema)),
    _keysMap: {
      userMatches: "UserMatches",
      faceModelVersion: "FaceModelVersion",
      searchedFace: "SearchedFace",
      searchedUser: "SearchedUser",
    },
  },
  { additionalProperties: s.json() },
);
