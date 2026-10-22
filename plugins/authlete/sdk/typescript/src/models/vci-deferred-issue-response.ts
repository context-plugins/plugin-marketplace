import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action41Schema, type Action41 } from "./action41.js";

export type VciDeferredIssueResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the implementation of the deferred credential endpoint should take. */
  action?: Action41;
  /**
   * The content of the response that the implementation of the deferred credential endpoint should
   * return.
   */
  responseContent?: string;
};

export const vciDeferredIssueResponseSchema: Schema<VciDeferredIssueResponse> =
  s.object<VciDeferredIssueResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action41Schema)),
    responseContent: s.optional(s.string()),
  });
