import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** OAuth application credentials */
export type Config2 = {
  /** OAuth client ID from your OAuth application */
  clientId: string;
  /**
   * OAuth client secret; never in the create response, and returned by GET only to admins (masked
   * when HIDE_SECRET_CONFIG is on)
   */
  clientSecret: string;
  /** Azure tenant ID (required only for Microsoft connectors) */
  tenantId?: string;
};

export const config2Schema: Schema<Config2> = s.object<Config2>({
  clientId: s.string(),
  clientSecret: s.string(),
  tenantId: s.optional(s.string()),
});
