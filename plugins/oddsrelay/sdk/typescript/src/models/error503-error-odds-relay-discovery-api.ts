import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error5OddsRelayDiscoveryApiSchema,
  type Error5OddsRelayDiscoveryApi,
} from "./error5-odds-relay-discovery-api.js";

export type Error503ErrorOddsRelayDiscoveryApi = {
  error: Error5OddsRelayDiscoveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error503ErrorOddsRelayDiscoveryApiSchema: Schema<Error503ErrorOddsRelayDiscoveryApi> =
  s.object<Error503ErrorOddsRelayDiscoveryApi>(
    {
      error: error5OddsRelayDiscoveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
