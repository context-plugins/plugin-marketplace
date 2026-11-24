import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error1OddsRelayDiscoveryApiSchema,
  type Error1OddsRelayDiscoveryApi,
} from "./error1-odds-relay-discovery-api.js";

export type Error429ErrorOddsRelayDiscoveryApi = {
  error: Error1OddsRelayDiscoveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error429ErrorOddsRelayDiscoveryApiSchema: Schema<Error429ErrorOddsRelayDiscoveryApi> =
  s.object<Error429ErrorOddsRelayDiscoveryApi>(
    {
      error: error1OddsRelayDiscoveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
