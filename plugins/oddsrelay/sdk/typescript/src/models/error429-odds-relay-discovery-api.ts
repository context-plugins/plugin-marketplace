import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error1OddsRelayDiscoveryApiSchema,
  type Error1OddsRelayDiscoveryApi,
} from "./error1-odds-relay-discovery-api.js";

export type Error429OddsRelayDiscoveryApi = {
  error: Error1OddsRelayDiscoveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error429OddsRelayDiscoveryApiSchema: Schema<Error429OddsRelayDiscoveryApi> =
  s.object<Error429OddsRelayDiscoveryApi>(
    {
      error: error1OddsRelayDiscoveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
