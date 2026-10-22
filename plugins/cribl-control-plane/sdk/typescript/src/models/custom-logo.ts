import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Custom logo configuration for the Cribl UI login page and navigation bar. */
export type CustomLogo = {
  /** If <code>true</code>, display the custom logo in the UI. Otherwise, <code>false</code>. */
  enabled?: boolean;
  /** Description text displayed alongside the custom logo. */
  logoDescription?: string;
  /** Custom logo image as a base64-encoded data URI (PNG or JPEG, maximum 2 MB). */
  logoImage?: string;
};

export const customLogoSchema: Schema<CustomLogo> = s.object<CustomLogo>({
  enabled: s.optional(s.boolean()),
  logoDescription: s.optional(s.string()),
  logoImage: s.optional(s.string()),
});
