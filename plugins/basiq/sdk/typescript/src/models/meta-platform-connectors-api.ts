import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MetaPlatformConnectorsApi = {
  /** URL to institution forgotten password page */
  forgottenPasswordUrl?: string;
  /** Login ID field caption that should be shown on UI */
  loginIdCaption?: string;
  /** Password field caption that should be shown on UI */
  passwordCaption?: string;
  /** Secondary loginID caption that should be shown on UI */
  secondaryLoginIdCaption?: string;
  /** Security code caption that should be shown on UI */
  securityCodeCaption?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaPlatformConnectorsApiSchema: Schema<MetaPlatformConnectorsApi> =
  s.object<MetaPlatformConnectorsApi>(
    {
      forgottenPasswordUrl: s.optional(s.string()),
      loginIdCaption: s.optional(s.string()),
      passwordCaption: s.optional(s.string()),
      secondaryLoginIdCaption: s.optional(s.string()),
      securityCodeCaption: s.optional(s.string()),
      _keysMap: {
        forgottenPasswordUrl: "forgotten_password_url",
        loginIdCaption: "login_id_caption",
        passwordCaption: "password_caption",
        secondaryLoginIdCaption: "secondary_login_id_caption",
        securityCodeCaption: "security_code_caption",
      },
    },
    { additionalProperties: s.json() },
  );
