import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /deleteuser API call */
export type DeleteUserRequest = {
  /**
   * Version number for document for optimistic concurrency control. If absent or 0 then no version
   * checks are done.
   */
  version?: number;
  /** The datasource for which the user is removed */
  datasource: string;
  /** The email of the user to be deleted */
  email: string;
};

export const deleteUserRequestSchema: Schema<DeleteUserRequest> = s.object<DeleteUserRequest>({
  version: s.optional(s.int()),
  datasource: s.string(),
  email: s.string(),
});
