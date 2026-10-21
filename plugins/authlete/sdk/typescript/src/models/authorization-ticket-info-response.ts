import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action42Schema, type Action42 } from "./action42.js";
import { authorizationTicketInfoSchema, type AuthorizationTicketInfo } from "./authorization-ticket-info.js";

export type AuthorizationTicketInfoResponse = {
  info?: AuthorizationTicketInfo;
  /** The result of the `/auth/authorization/ticket/info` API call. */
  action?: Action42;
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
};

export const authorizationTicketInfoResponseSchema: Schema<AuthorizationTicketInfoResponse> =
  s.object<AuthorizationTicketInfoResponse>({
    info: s.optional(s.lazy(() => authorizationTicketInfoSchema)),
    action: s.optional(s.lazy(() => action42Schema)),
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
  });
