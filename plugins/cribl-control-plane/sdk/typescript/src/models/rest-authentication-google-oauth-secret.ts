import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication3Schema, type Authentication3 } from "./authentication3.js";

export type RestAuthenticationGoogleOauthSecret = {
  /** Discriminator value. */
  authentication?: Authentication3;
  /**
   * Scopes to use during authentication. See [Google's
   * docs](https://developers.google.com/identity/protocols/oauth2/scopes) for more information.
   */
  scopes: string[];
  /** Select or create a text secret that contains the Google service account credentials value */
  textSecret: string;
  /**
   * Email address of a user account with Super Admin permissions to the resources the collector
   * will retrieve
   */
  subject: string;
  /**
   * Binds 'subject' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'subject' at runtime.
   */
  templateSubject?: string;
};

export const restAuthenticationGoogleOauthSecretSchema: Schema<RestAuthenticationGoogleOauthSecret> =
  s.object<RestAuthenticationGoogleOauthSecret>({
    authentication: s.optional(s.lazy(() => authentication3Schema)),
    scopes: s.array(s.string()),
    textSecret: s.string(),
    subject: s.string(),
    templateSubject: s.optional(s.string()),
    _keysMap: {
      templateSubject: "__template_subject",
    },
  });
