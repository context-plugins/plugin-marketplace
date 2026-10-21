import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VciBatchParseRequest = {
  /** The access token that came along with the credential request. */
  accessToken?: string;
  /** The message body of the batch credential request. */
  requestContent?: string;
};

export const vciBatchParseRequestSchema: Schema<VciBatchParseRequest> = s.object<VciBatchParseRequest>({
  accessToken: s.optional(s.string()),
  requestContent: s.optional(s.string()),
});
