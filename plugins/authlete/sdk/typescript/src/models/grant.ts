import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authzDetailsSchema, type AuthzDetails } from "./authz-details.js";
import { grantScopeSchema, type GrantScope } from "./grant-scope.js";

export type Grant = {
  scopes?: GrantScope[];
  /** The claims associated with the Grant. */
  claims?: string[];
  /**
   * The authorization details. This represents the value of the `authorization_details` request
   * parameter in the preceding device authorization request which is defined in "OAuth 2.0 Rich
   * Authorization Requests".
   */
  authorizationDetails?: AuthzDetails;
};

export const grantSchema: Schema<Grant> = s.object<Grant>({
  scopes: s.optional(s.array(s.lazy(() => grantScopeSchema))),
  claims: s.optional(s.array(s.string())),
  authorizationDetails: s.optional(s.lazy(() => authzDetailsSchema)),
});
