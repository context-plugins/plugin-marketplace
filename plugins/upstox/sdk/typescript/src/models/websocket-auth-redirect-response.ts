import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import {
  websocketAuthRedirectResponseData2Schema,
  type WebsocketAuthRedirectResponseData2,
} from "./websocket-auth-redirect-response-data2.js";

export type WebsocketAuthRedirectResponse = {
  status?: Status;
  /** Response data for WebsocketAuthRedirectResponse */
  data?: WebsocketAuthRedirectResponseData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const websocketAuthRedirectResponseSchema: Schema<WebsocketAuthRedirectResponse> =
  s.object<WebsocketAuthRedirectResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => websocketAuthRedirectResponseData2Schema)),
    },
    { additionalProperties: s.json() },
  );
