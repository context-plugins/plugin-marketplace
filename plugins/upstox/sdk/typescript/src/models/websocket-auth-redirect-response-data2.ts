import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response data for WebsocketAuthRedirectResponse */
export type WebsocketAuthRedirectResponseData2 = {
  /**
   * @deprecated
   */
  authorizedRedirectUri?: string;
  authorizedRedirectUri2?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const websocketAuthRedirectResponseData2Schema: Schema<WebsocketAuthRedirectResponseData2> =
  s.object<WebsocketAuthRedirectResponseData2>(
    {
      authorizedRedirectUri: s.optional(s.string()),
      authorizedRedirectUri2: s.optional(s.string()),
      _keysMap: {
        authorizedRedirectUri2: "authorized_redirect_uri",
      },
    },
    { additionalProperties: s.json() },
  );
