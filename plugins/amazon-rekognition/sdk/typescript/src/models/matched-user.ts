import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  userStatus1AmazonRekognitionUserApiSchema,
  type UserStatus1AmazonRekognitionUserApi,
} from "./user-status1-amazon-rekognition-user-api.js";

export type MatchedUser = {
  /** A provided ID for the UserID. Unique within the collection. */
  userId?: string;
  /** The status of the user matched to a provided FaceID. */
  userStatus?: UserStatus1AmazonRekognitionUserApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const matchedUserSchema: Schema<MatchedUser> = s.object<MatchedUser>(
  {
    userId: s.optional(s.string()),
    userStatus: s.optional(s.lazy(() => userStatus1AmazonRekognitionUserApiSchema)),
    _keysMap: {
      userId: "UserId",
      userStatus: "UserStatus",
    },
  },
  { additionalProperties: s.json() },
);
