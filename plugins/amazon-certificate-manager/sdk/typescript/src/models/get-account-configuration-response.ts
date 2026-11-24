import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  expiryEventsConfigurationSchema,
  type ExpiryEventsConfiguration,
} from "./expiry-events-configuration.js";

export type GetAccountConfigurationResponse = {
  expiryEvents?: ExpiryEventsConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getAccountConfigurationResponseSchema: Schema<GetAccountConfigurationResponse> =
  s.object<GetAccountConfigurationResponse>(
    {
      expiryEvents: s.optional(s.lazy(() => expiryEventsConfigurationSchema)),
      _keysMap: {
        expiryEvents: "ExpiryEvents",
      },
    },
    { additionalProperties: s.json() },
  );
