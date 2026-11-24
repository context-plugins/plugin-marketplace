import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebsocketAuthRedirectResponseData = {
  /**
   * @deprecated
   */
  authorizedRedirectUri?: string;
  authorizedRedirectUri2?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const websocketAuthRedirectResponseDataSchema: Schema<WebsocketAuthRedirectResponseData> =
  s.object<WebsocketAuthRedirectResponseData>(
    {
      authorizedRedirectUri: s.optional(s.string()),
      authorizedRedirectUri2: s.optional(s.string()),
      _keysMap: {
        authorizedRedirectUri2: "authorized_redirect_uri",
      },
    },
    { additionalProperties: s.json() },
  );
