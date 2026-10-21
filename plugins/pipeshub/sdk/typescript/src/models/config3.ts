import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * OAuth app fields to change, merged over the saved ones. Keys follow the connector type's OAuth
 * fields; a masked secret sent back as returned is ignored, so the saved value is kept.
 */
export type Config3 = {
  clientId?: string;
  clientSecret?: string;
  tenantId?: string;
};

export const config3Schema: Schema<Config3> = s.object<Config3>({
  clientId: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
  tenantId: s.optional(s.string()),
});
