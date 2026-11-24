import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error5OddsRelayServiceApiSchema,
  type Error5OddsRelayServiceApi,
} from "./error5-odds-relay-service-api.js";

/** Every JSON 4xx and 5xx this API writes. */
export type ErrorBodyOddsRelayServiceApi = {
  error: Error5OddsRelayServiceApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorBodyOddsRelayServiceApiSchema: Schema<ErrorBodyOddsRelayServiceApi> =
  s.object<ErrorBodyOddsRelayServiceApi>(
    {
      error: error5OddsRelayServiceApiSchema,
    },
    { additionalProperties: s.json() },
  );
