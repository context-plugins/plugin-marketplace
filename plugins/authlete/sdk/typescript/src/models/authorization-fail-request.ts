import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type AuthorizationFailRequest = {
  /** The ticket issued from Authlete `/auth/authorization` API. */
  ticket: string;
  /**
   * The reason of the failure of the authorization request. For more details, see [NO_INTERACTION]
   * in the description of `/auth/authorization` API.
   */
  reason: Reason;
  /** The custom description about the authorization failure. */
  description?: string;
};

export const authorizationFailRequestSchema: Schema<AuthorizationFailRequest> =
  s.object<AuthorizationFailRequest>({
    ticket: s.string(),
    reason: reasonSchema,
    description: s.optional(s.string()),
  });
