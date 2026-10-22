import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Optional caller credential sent as an HTTP auth header on each delivery, in addition to the HMAC
 * signature. Lets the receiving endpoint authenticate the request. On update, omit `auth` to
 * preserve the existing credential; there is no in-place removal — recreate the trigger to remove
 * auth.
 */
export type PlatformTriggerAuth = {
  /** Credential scheme. @default "BEARER" */
  type?: "BEARER";
  /** Secret credential value. Write-only; never returned on reads. */
  secret: string;
};

export const platformTriggerAuthSchema: Schema<PlatformTriggerAuth> = s.object<PlatformTriggerAuth>({
  type: s.defaulted(s.literal("BEARER"), "BEARER"),
  secret: s.string(),
});
