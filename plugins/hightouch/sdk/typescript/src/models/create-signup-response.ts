import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusHightouchSignupsApiSchema,
  type StatusHightouchSignupsApi,
} from "./status-hightouch-signups-api.js";

/**
 * `subscribed` means consent settled in this request. `doi_pending_confirmation` means a
 * confirmation was sent and consent settles when the person answers, which may be days later.
 */
export type CreateSignupResponse = {
  status: StatusHightouchSignupsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSignupResponseSchema: Schema<CreateSignupResponse> = s.object<CreateSignupResponse>(
  {
    status: statusHightouchSignupsApiSchema,
  },
  { additionalProperties: s.json() },
);
