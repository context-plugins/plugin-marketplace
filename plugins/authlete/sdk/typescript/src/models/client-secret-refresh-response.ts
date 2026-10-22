import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientSecretRefreshResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The new client secret. */
  newClientSecret?: string;
  /** The old client secret. */
  oldClientSecret?: string;
};

export const clientSecretRefreshResponseSchema: Schema<ClientSecretRefreshResponse> =
  s.object<ClientSecretRefreshResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    newClientSecret: s.optional(s.string()),
    oldClientSecret: s.optional(s.string()),
  });
