import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aTypeSchema, type AType } from "./atype.js";

export type ApiV1Click2CallRequest = {
  /**
   * Type of the agent leg. `sip_account` rings one of your SIP accounts; `stream` connects your own
   * WebSocket endpoint first, where the account allows it.
   */
  aType: AType;
  /**
   * For `sip_account`, the five-digit SIP account name from sipaccounts_index to ring first. For
   * `stream`, the public `wss://` URL of your endpoint, at most 2048 characters, dialled exactly as
   * given. Your endpoint is sent `start` as soon as the socket opens and the leg is answered; the
   * destination is dialled after that, and its pickup arrives as `answered`.
   */
  aEndpoint: string;
  /** Destination number in E.164, with or without the leading `+`. */
  bNumber: string;
  /**
   * Optional `https` URL on a public host, at most 255 characters. Every transition of this call is
   * POSTed to it — see the description above.
   */
  callbackUrl: string;
  /**
   * Optional label of your own, echoed back on every surface that reports this call. At most 64
   * characters of `A-Z`, `a-z`, `0-9`, `_` or `-`. Not checked for uniqueness and never used to
   * address the call.
   */
  clientCallId: string;
  /**
   * Optional caller ID shown on the agent leg instead of `b_number`: E.164, at most 15 digits, with
   * or without the leading `+`. When present it must be valid — `null` or an empty string is
   * refused, never ignored.
   */
  aCli?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Click2CallRequestSchema: Schema<ApiV1Click2CallRequest> = s.object<ApiV1Click2CallRequest>(
  {
    aType: aTypeSchema,
    aEndpoint: s.string(),
    bNumber: s.string(),
    callbackUrl: s.string(),
    clientCallId: s.string(),
    aCli: s.optional(s.string()),
    _keysMap: {
      aType: "a_type",
      aEndpoint: "a_endpoint",
      bNumber: "b_number",
      callbackUrl: "callback_url",
      clientCallId: "client_call_id",
      aCli: "a_cli",
    },
  },
  { additionalProperties: s.json() },
);
