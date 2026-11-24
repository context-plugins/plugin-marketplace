import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  expiryEventsConfigurationSchema,
  type ExpiryEventsConfiguration,
} from "./expiry-events-configuration.js";

export type PutAccountConfigurationRequest = {
  expiryEvents?: ExpiryEventsConfiguration;
  /**
   * Customer-chosen string used to distinguish between calls to PutAccountConfiguration.
   * Idempotency tokens time out after one hour. If you call PutAccountConfiguration multiple times
   * with the same unexpired idempotency token, ACM treats it as the same request and returns the
   * original result. If you change the idempotency token for each call, ACM treats each call as a
   * new request.
   */
  idempotencyToken: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putAccountConfigurationRequestSchema: Schema<PutAccountConfigurationRequest> =
  s.object<PutAccountConfigurationRequest>(
    {
      expiryEvents: s.optional(s.lazy(() => expiryEventsConfigurationSchema)),
      idempotencyToken: s.string(),
      _keysMap: {
        expiryEvents: "ExpiryEvents",
        idempotencyToken: "IdempotencyToken",
      },
    },
    { additionalProperties: s.json() },
  );
