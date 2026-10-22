import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request model to delete a user. */
export type UserDeleteRequest = {
  /** The email address of the user to delete */
  email: string;
  /** The reason for deleting the user */
  reason: string;
};

export const userDeleteRequestSchema: Schema<UserDeleteRequest> = s.object<UserDeleteRequest>({
  email: s.string(),
  reason: s.string(),
});
