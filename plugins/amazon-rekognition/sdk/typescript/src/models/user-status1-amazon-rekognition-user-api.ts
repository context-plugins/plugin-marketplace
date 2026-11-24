import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the user matched to a provided FaceID. */
export const UserStatus1AmazonRekognitionUserApi = {
  Active: "ACTIVE",
  Updating: "UPDATING",
  Creating: "CREATING",
  Created: "CREATED",
} as const;
export type UserStatus1AmazonRekognitionUserApi =
  | (typeof UserStatus1AmazonRekognitionUserApi)[keyof typeof UserStatus1AmazonRekognitionUserApi]
  | (string & {});

export const userStatus1AmazonRekognitionUserApiSchema: EnumSchema<UserStatus1AmazonRekognitionUserApi> =
  s.enumOf<UserStatus1AmazonRekognitionUserApi>(UserStatus1AmazonRekognitionUserApi);
