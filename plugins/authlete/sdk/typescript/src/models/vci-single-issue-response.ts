import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action37Schema, type Action37 } from "./action37.js";

export type VciSingleIssueResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the implementation of the credential endpoint should take. */
  action?: Action37;
  /**
   * The content of the response that the implementation of the credential endpoint should return.
   */
  responseContent?: string;
  /** The issued transaction ID. */
  transactionId?: string;
};

export const vciSingleIssueResponseSchema: Schema<VciSingleIssueResponse> = s.object<VciSingleIssueResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action37Schema)),
  responseContent: s.optional(s.string()),
  transactionId: s.optional(s.string()),
});
