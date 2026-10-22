import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientAuthorizationDeleteResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** A short message which explains the result of the API call. */
  serviceApiKey?: number;
  /** Get the client ID. */
  clientId?: number;
  /**
   * Get the subject (= unique identifier) of the user who has granted authorization to the client.
   */
  subject?: string;
  /**
   * Get the scopes granted to the client application by the last authorization process by the user
   * (who is identified by the subject).
   */
  latestGrantedScopes?: string[];
  /**
   * Get the scopes granted to the client application by all the past authorization processes. Note
   * that revoked scopes are not included.
   */
  mergedGrantedScopes?: string[];
  /** Get the timestamp in milliseconds since Unix epoch at which this record was modified. */
  modifiedAt?: number;
};

export const clientAuthorizationDeleteResponseSchema: Schema<ClientAuthorizationDeleteResponse> =
  s.object<ClientAuthorizationDeleteResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    serviceApiKey: s.optional(s.int()),
    clientId: s.optional(s.int()),
    subject: s.optional(s.string()),
    latestGrantedScopes: s.optional(s.array(s.string())),
    mergedGrantedScopes: s.optional(s.array(s.string())),
    modifiedAt: s.optional(s.int()),
  });
