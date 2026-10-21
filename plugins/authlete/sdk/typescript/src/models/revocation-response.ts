import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action9Schema, type Action9 } from "./action9.js";

export type RevocationResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action9;
  /**
   * The content that the authorization server implementation is to return to the client
   * application. Its format varies depending on the value of `action` parameter.
   */
  responseContent?: string;
};

export const revocationResponseSchema: Schema<RevocationResponse> = s.object<RevocationResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action9Schema)),
  responseContent: s.optional(s.string()),
});
