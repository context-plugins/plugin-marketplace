import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response containing information about the authenticated user. */
export type UserIdentifyResponse = {
  /** The first name of the user. */
  firstName?: string;
  /** The last name of the user. */
  lastName?: string;
  /** The email address of the user. */
  email?: string;
  /** URL to the user's profile picture. */
  profilePicture?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userIdentifyResponseSchema: Schema<UserIdentifyResponse> = s.object<UserIdentifyResponse>(
  {
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    email: s.optional(s.string()),
    profilePicture: s.optional(s.string()),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      profilePicture: "profile_picture",
    },
  },
  { additionalProperties: s.json() },
);
