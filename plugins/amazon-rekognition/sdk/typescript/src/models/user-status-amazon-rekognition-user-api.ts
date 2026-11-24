import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Communicates if the UserID has been updated with latest set of faces to be associated with the
 * UserID.
 */
export const UserStatusAmazonRekognitionUserApi = {
  Active: "ACTIVE",
  Updating: "UPDATING",
  Creating: "CREATING",
  Created: "CREATED",
} as const;
export type UserStatusAmazonRekognitionUserApi =
  | (typeof UserStatusAmazonRekognitionUserApi)[keyof typeof UserStatusAmazonRekognitionUserApi]
  | (string & {});

export const userStatusAmazonRekognitionUserApiSchema: EnumSchema<UserStatusAmazonRekognitionUserApi> =
  s.enumOf<UserStatusAmazonRekognitionUserApi>(UserStatusAmazonRekognitionUserApi);
