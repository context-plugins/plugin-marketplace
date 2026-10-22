import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason2Schema, type Reason2 } from "./reason2.js";

export type BackchannelAuthenticationFailRequest = {
  /**
   * The ticket which should be deleted on a call of Authlete's `/backchannel/authentication/fail`
   * API. This request parameter is not mandatory but optional. If this request parameter is given
   * and the ticket belongs to the service, the specified ticket is deleted from the database.
   * Giving this parameter is recommended to clean up the storage area for the service.
   */
  ticket: string;
  /**
   * The reason of the failure of the backchannel authentication request. This request parameter is
   * not mandatory but optional. However, giving this parameter is recommended. If omitted,
   * `SERVER_ERROR` is used as a reason.
   */
  reason: Reason2;
  /**
   * The description of the error. This corresponds to the `error_description` property in the
   * response to the client.
   */
  errorDescription?: string;
  /**
   * The URI of a document which describes the error in detail. If this optional request parameter
   * is given, its value is used as the value of the `error_uri` property.
   */
  errorUri?: string;
};

export const backchannelAuthenticationFailRequestSchema: Schema<BackchannelAuthenticationFailRequest> =
  s.object<BackchannelAuthenticationFailRequest>({
    ticket: s.string(),
    reason: reason2Schema,
    errorDescription: s.optional(s.string()),
    errorUri: s.optional(s.string()),
  });
