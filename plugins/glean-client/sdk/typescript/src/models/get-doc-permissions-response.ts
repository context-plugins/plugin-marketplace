import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetDocPermissionsResponse = {
  /**
   * A list of emails of users who have access to the document. If the document is visible to all
   * Glean users, a list with only a single value of 'VISIBLE_TO_ALL'.
   */
  allowedUserEmails?: string[];
};

export const getDocPermissionsResponseSchema: Schema<GetDocPermissionsResponse> =
  s.object<GetDocPermissionsResponse>({
    allowedUserEmails: s.optional(s.array(s.string())),
  });
