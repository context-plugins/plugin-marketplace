import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action11Schema, type Action11 } from "./action11.js";

export type UserinfoIssueResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action11;
  /**
   * The content that the authorization server implementation can use as the value of
   * `WWW-Authenticate` header on errors.
   */
  responseContent?: string;
  /** The signature header of the response message. */
  signature?: string;
  /** The signature-input header of the response message */
  signatureInput?: string;
  /** The content-digest header of the response message */
  contentDigest?: string;
};

export const userinfoIssueResponseSchema: Schema<UserinfoIssueResponse> = s.object<UserinfoIssueResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action11Schema)),
  responseContent: s.optional(s.string()),
  signature: s.optional(s.string()),
  signatureInput: s.optional(s.string()),
  contentDigest: s.optional(s.string()),
});
