import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VciSingleParseRequest = {
  /** The access token that came along with the credential request. */
  accessToken?: string;
  /** The message body of the credential request. */
  requestContent?: string;
};

export const vciSingleParseRequestSchema: Schema<VciSingleParseRequest> = s.object<VciSingleParseRequest>({
  accessToken: s.optional(s.string()),
  requestContent: s.optional(s.string()),
});
