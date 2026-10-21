import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VciDeferredParseRequest = {
  /** The access token that came along with the deferred credential request. */
  accessToken?: string;
  /** The message body of the deferred credential request. */
  requestContent?: string;
};

export const vciDeferredParseRequestSchema: Schema<VciDeferredParseRequest> =
  s.object<VciDeferredParseRequest>({
    accessToken: s.optional(s.string()),
    requestContent: s.optional(s.string()),
  });
