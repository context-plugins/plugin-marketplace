import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authorizationDetailsElementSchema,
  type AuthorizationDetailsElement,
} from "./authorization-details-element.js";

/**
 * The authorization details. This represents the value of the `authorization_details` request
 * parameter in the preceding device authorization request which is defined in "OAuth 2.0 Rich
 * Authorization Requests".
 */
export type AuthzDetails = {
  /** Elements of this authorization details. */
  elements?: AuthorizationDetailsElement[];
};

export const authzDetailsSchema: Schema<AuthzDetails> = s.object<AuthzDetails>({
  elements: s.optional(s.array(s.lazy(() => authorizationDetailsElementSchema))),
});
