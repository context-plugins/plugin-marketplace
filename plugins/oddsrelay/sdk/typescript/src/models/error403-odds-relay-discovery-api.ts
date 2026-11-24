import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error2OddsRelayDiscoveryApiSchema,
  type Error2OddsRelayDiscoveryApi,
} from "./error2-odds-relay-discovery-api.js";

export type Error403OddsRelayDiscoveryApi = {
  error: Error2OddsRelayDiscoveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error403OddsRelayDiscoveryApiSchema: Schema<Error403OddsRelayDiscoveryApi> =
  s.object<Error403OddsRelayDiscoveryApi>(
    {
      error: error2OddsRelayDiscoveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
