import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthorizationTicketInfoRequest = {
  /** The ticket that has been issued from the `/auth/authorization` API. */
  ticket: string;
};

export const authorizationTicketInfoRequestSchema: Schema<AuthorizationTicketInfoRequest> =
  s.object<AuthorizationTicketInfoRequest>({
    ticket: s.string(),
  });
