import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Optional request body for `DELETE /personal-access-tokens/{tokenId}` and `DELETE
 * /personal-access-tokens/admin/{tokenId}`. The body itself is optional; `reason`, if present, is
 * stored on the revocation for auditing.
 */
export type RevokePatRequest = {
  reason?: string;
};

export const revokePatRequestSchema: Schema<RevokePatRequest> = s.object<RevokePatRequest>({
  reason: s.optional(s.string()),
});
