import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TokenRevokeResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /**
   * The number of tokens revoked.
   *
   * If the target has more than 20 tokens, the response `count` will be 20 and the remainder is
   * left untouched. To fully wipe them, call the endpoint repeatedly until `count` returns 0.
   */
  count?: number;
};

export const tokenRevokeResponseSchema: Schema<TokenRevokeResponse> = s.object<TokenRevokeResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  count: s.optional(s.int()),
});
