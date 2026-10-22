import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action43Schema, type Action43 } from "./action43.js";
import { authorizationTicketInfoSchema, type AuthorizationTicketInfo } from "./authorization-ticket-info.js";

export type AuthorizationTicketUpdateResponse = {
  info?: AuthorizationTicketInfo;
  /** The result of the /auth/authorization/ticket/info API call. */
  action?: Action43;
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
};

export const authorizationTicketUpdateResponseSchema: Schema<AuthorizationTicketUpdateResponse> =
  s.object<AuthorizationTicketUpdateResponse>({
    info: s.optional(s.lazy(() => authorizationTicketInfoSchema)),
    action: s.optional(s.lazy(() => action43Schema)),
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
  });
