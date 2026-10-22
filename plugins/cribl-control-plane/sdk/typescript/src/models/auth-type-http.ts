import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod101Schema, type AuthenticationMethod101 } from "./authentication-method101.js";

/** Authentication settings for HTTP requests. */
export type AuthTypeHttp = {
  /** Whether authentication is disabled for HTTP requests. */
  disabled: boolean;
  /** Username */
  username?: string;
  /** Password */
  password?: string;
  /** Enter credentials directly, or select a stored secret */
  authType?: AuthenticationMethod101;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
  /** Enter API key directly */
  manualApiKey?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
  /**
   * Binds 'manualAPIKey' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'manualAPIKey' at runtime.
   */
  templateManualApiKey?: string;
};

export const authTypeHttpSchema: Schema<AuthTypeHttp> = s.object<AuthTypeHttp>({
  disabled: s.boolean(),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  authType: s.optional(s.lazy(() => authenticationMethod101Schema)),
  credentialsSecret: s.optional(s.string()),
  manualApiKey: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  templateManualApiKey: s.optional(s.string()),
  _keysMap: {
    manualApiKey: "manualAPIKey",
    templateManualApiKey: "__template_manualAPIKey",
  },
});
