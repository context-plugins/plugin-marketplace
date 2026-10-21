import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action39Schema, type Action39 } from "./action39.js";

export type VciBatchIssueResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the implementation of the batch credential endpoint should take. */
  action?: Action39;
  /**
   * The content of the response that the implementation of the batch credential endpoint should
   * return.
   */
  responseContent?: string;
};

export const vciBatchIssueResponseSchema: Schema<VciBatchIssueResponse> = s.object<VciBatchIssueResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action39Schema)),
  responseContent: s.optional(s.string()),
});
