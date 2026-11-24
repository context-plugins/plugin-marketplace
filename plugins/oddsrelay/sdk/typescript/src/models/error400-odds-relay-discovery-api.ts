import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error6OddsRelayDiscoveryApiSchema,
  type Error6OddsRelayDiscoveryApi,
} from "./error6-odds-relay-discovery-api.js";

export type Error400OddsRelayDiscoveryApi = {
  error: Error6OddsRelayDiscoveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error400OddsRelayDiscoveryApiSchema: Schema<Error400OddsRelayDiscoveryApi> =
  s.object<Error400OddsRelayDiscoveryApi>(
    {
      error: error6OddsRelayDiscoveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
