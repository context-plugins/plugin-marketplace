import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error3OddsRelayServiceApiSchema,
  type Error3OddsRelayServiceApi,
} from "./error3-odds-relay-service-api.js";

export type Error400OddsRelayServiceApi = {
  error: Error3OddsRelayServiceApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error400OddsRelayServiceApiSchema: Schema<Error400OddsRelayServiceApi> =
  s.object<Error400OddsRelayServiceApi>(
    {
      error: error3OddsRelayServiceApiSchema,
    },
    { additionalProperties: s.json() },
  );
