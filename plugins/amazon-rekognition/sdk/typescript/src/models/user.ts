import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  userStatusAmazonRekognitionUserApiSchema,
  type UserStatusAmazonRekognitionUserApi,
} from "./user-status-amazon-rekognition-user-api.js";

export type User = {
  /** A provided ID for the User. Unique within the collection. */
  userId?: string;
  /**
   * Communicates if the UserID has been updated with latest set of faces to be associated with the
   * UserID.
   */
  userStatus?: UserStatusAmazonRekognitionUserApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userSchema: Schema<User> = s.object<User>(
  {
    userId: s.optional(s.string()),
    userStatus: s.optional(s.lazy(() => userStatusAmazonRekognitionUserApiSchema)),
    _keysMap: {
      userId: "UserId",
      userStatus: "UserStatus",
    },
  },
  { additionalProperties: s.json() },
);
