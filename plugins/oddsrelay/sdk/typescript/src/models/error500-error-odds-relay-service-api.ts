import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error4OddsRelayServiceApiSchema,
  type Error4OddsRelayServiceApi,
} from "./error4-odds-relay-service-api.js";

export type Error500ErrorOddsRelayServiceApi = {
  error: Error4OddsRelayServiceApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error500ErrorOddsRelayServiceApiSchema: Schema<Error500ErrorOddsRelayServiceApi> =
  s.object<Error500ErrorOddsRelayServiceApi>(
    {
      error: error4OddsRelayServiceApiSchema,
    },
    { additionalProperties: s.json() },
  );
