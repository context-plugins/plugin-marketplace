import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error7OddsRelayServiceApiSchema,
  type Error7OddsRelayServiceApi,
} from "./error7-odds-relay-service-api.js";

export type Error401ErrorOddsRelayServiceApi = {
  error: Error7OddsRelayServiceApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error401ErrorOddsRelayServiceApiSchema: Schema<Error401ErrorOddsRelayServiceApi> =
  s.object<Error401ErrorOddsRelayServiceApi>(
    {
      error: error7OddsRelayServiceApiSchema,
    },
    { additionalProperties: s.json() },
  );
