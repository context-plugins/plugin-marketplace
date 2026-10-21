import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthorizationTicketInfo = {
  /** The arbitrary text attached to the ticket. */
  context?: string;
};

export const authorizationTicketInfoSchema: Schema<AuthorizationTicketInfo> =
  s.object<AuthorizationTicketInfo>({
    context: s.optional(s.string()),
  });
