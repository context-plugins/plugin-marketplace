import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error2OddsRelayDiscoveryApiSchema,
  type Error2OddsRelayDiscoveryApi,
} from "./error2-odds-relay-discovery-api.js";

export type Error403ErrorOddsRelayDiscoveryApi = {
  error: Error2OddsRelayDiscoveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error403ErrorOddsRelayDiscoveryApiSchema: Schema<Error403ErrorOddsRelayDiscoveryApi> =
  s.object<Error403ErrorOddsRelayDiscoveryApi>(
    {
      error: error2OddsRelayDiscoveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
