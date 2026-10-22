import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason of the failure of the backchannel authentication request. This request parameter is
 * not mandatory but optional. However, giving this parameter is recommended. If omitted,
 * `SERVER_ERROR` is used as a reason.
 */
export const Reason2 = {
  AccessDenied: "ACCESS_DENIED",
  ExpiredLoginHintToken: "EXPIRED_LOGIN_HINT_TOKEN",
  InvalidBindingMessage: "INVALID_BINDING_MESSAGE",
  InvalidTarget: "INVALID_TARGET",
  InvalidUserCode: "INVALID_USER_CODE",
  MissingUserCode: "MISSING_USER_CODE",
  ServerError: "SERVER_ERROR",
  UnauthorizedClient: "UNAUTHORIZED_CLIENT",
  UnknownUserId: "UNKNOWN_USER_ID",
} as const;
export type Reason2 = (typeof Reason2)[keyof typeof Reason2] | (string & {});

export const reason2Schema: EnumSchema<Reason2> = s.enumOf<Reason2>(Reason2);
