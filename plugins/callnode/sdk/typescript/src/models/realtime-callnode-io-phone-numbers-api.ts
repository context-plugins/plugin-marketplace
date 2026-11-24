import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookAuthCallnodeIoPhoneNumbersApiSchema,
  type WebhookAuthCallnodeIoPhoneNumbersApi,
} from "./webhook-auth-callnode-io-phone-numbers-api.js";

/**
 * Realtime WebSocket mode (see /docs/realtime): CallNode opens a WebSocket to `url` for every call
 * to this number and streams transcripts (and, on request, caller audio); you stream audio back,
 * transfer or hang up. The webhook stays the fallback when the socket cannot be reached. Null turns
 * it off. The auth secret is write-only (reads return valueSet).
 */
export type RealtimeCallnodeIoPhoneNumbersApi = {
  /** wss:// URL on a public host */
  url: string;
  /** How CallNode authenticates to your webhook endpoint. */
  auth?: WebhookAuthCallnodeIoPhoneNumbersApi;
  /**
   * Voice for `say` frames (text mode): an id from GET /api/v1/numbers/voices. Null = the platform
   * default voice.
   */
  voice?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const realtimeCallnodeIoPhoneNumbersApiProperties: s.Shape<RealtimeCallnodeIoPhoneNumbersApi> = {
  url: s.string(),
  auth: s.optional(s.lazy(() => webhookAuthCallnodeIoPhoneNumbersApiSchema)),
  voice: s.optionalNullable(s.string()),
};

export const realtimeCallnodeIoPhoneNumbersApiInternalSchema: Schema<RealtimeCallnodeIoPhoneNumbersApi> =
  s.object<RealtimeCallnodeIoPhoneNumbersApi>(realtimeCallnodeIoPhoneNumbersApiProperties, {
    additionalProperties: s.json(),
  });

export const realtimeCallnodeIoPhoneNumbersApiSchema: Schema<RealtimeCallnodeIoPhoneNumbersApi> =
  s.lazySchema(() =>
    s.object<RealtimeCallnodeIoPhoneNumbersApi>(
      {
        ...realtimeCallnodeIoPhoneNumbersApiProperties,
        url: s.string().check(s.url()),
      },
      { additionalProperties: s.json() },
    ),
  );
