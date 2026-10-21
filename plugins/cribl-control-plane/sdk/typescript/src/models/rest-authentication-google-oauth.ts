import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication2Schema, type Authentication2 } from "./authentication2.js";

export type RestAuthenticationGoogleOauth = {
  /** Discriminator value. */
  authentication?: Authentication2;
  /**
   * Scopes to use during authentication. See [Google's
   * docs](https://developers.google.com/identity/protocols/oauth2/scopes) for more information.
   */
  scopes: string[];
  /**
   * Contents of Google Cloud service account credentials (JSON keys) file. To upload a file, click
   * the upload icon in this field's upper right.
   */
  serviceAccountCredentials: string;
  /**
   * Email address of a user account with Super Admin permissions to the resources the collector
   * will retrieve
   */
  subject: string;
  /**
   * Binds 'serviceAccountCredentials' to a variable for dynamic value resolution. Set to variable
   * ID (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'serviceAccountCredentials' at runtime.
   */
  templateServiceAccountCredentials?: string;
  /**
   * Binds 'subject' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'subject' at runtime.
   */
  templateSubject?: string;
};

export const restAuthenticationGoogleOauthSchema: Schema<RestAuthenticationGoogleOauth> =
  s.object<RestAuthenticationGoogleOauth>({
    authentication: s.optional(s.lazy(() => authentication2Schema)),
    scopes: s.array(s.string()),
    serviceAccountCredentials: s.string(),
    subject: s.string(),
    templateServiceAccountCredentials: s.optional(s.string()),
    templateSubject: s.optional(s.string()),
    _keysMap: {
      templateServiceAccountCredentials: "__template_serviceAccountCredentials",
      templateSubject: "__template_subject",
    },
  });
