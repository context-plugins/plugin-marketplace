import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error3OddsRelayDiscoveryApiSchema,
  type Error3OddsRelayDiscoveryApi,
} from "./error3-odds-relay-discovery-api.js";

export type Error401OddsRelayDiscoveryApi = {
  error: Error3OddsRelayDiscoveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error401OddsRelayDiscoveryApiSchema: Schema<Error401OddsRelayDiscoveryApi> =
  s.object<Error401OddsRelayDiscoveryApi>(
    {
      error: error3OddsRelayDiscoveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
