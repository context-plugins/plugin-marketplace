import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authorizationTicketInfoSchema, type AuthorizationTicketInfo } from "./authorization-ticket-info.js";

export type AuthorizationTicketUpdateRequest = {
  /** The ticket. */
  ticket: string;
  info: AuthorizationTicketInfo;
};

export const authorizationTicketUpdateRequestSchema: Schema<AuthorizationTicketUpdateRequest> =
  s.object<AuthorizationTicketUpdateRequest>({
    ticket: s.string(),
    info: authorizationTicketInfoSchema,
  });
