import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BackchannelAuthenticationIssueRequest = {
  /** The ticket issued from Authlete's `/backchannel/authentication` API. */
  ticket: string;
};

export const backchannelAuthenticationIssueRequestSchema: Schema<BackchannelAuthenticationIssueRequest> =
  s.object<BackchannelAuthenticationIssueRequest>({
    ticket: s.string(),
  });
