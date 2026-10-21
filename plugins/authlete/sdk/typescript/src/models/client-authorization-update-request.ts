import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientAuthorizationUpdateRequest = {
  /**
   * The subject (= unique identifier) of the end-user who has granted authorization to the client
   * application.
   */
  subject: string;
  /**
   * An array of new scopes. Optional. If a non-null value is given, the new scopes are set to all
   * existing access tokens. If an API call is made using `"Content-Type:
   * application/x-www-form-urlencoded"`, scope names listed in this request parameter should be
   * delimited by spaces (after form encoding, spaces are converted to `+`).
   */
  scopes?: string[];
};

export const clientAuthorizationUpdateRequestSchema: Schema<ClientAuthorizationUpdateRequest> =
  s.object<ClientAuthorizationUpdateRequest>({
    subject: s.string(),
    scopes: s.optional(s.array(s.string())),
  });
