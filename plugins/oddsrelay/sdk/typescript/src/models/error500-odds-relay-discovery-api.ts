import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorOddsRelayDiscoveryApiSchema,
  type ErrorOddsRelayDiscoveryApi,
} from "./error-odds-relay-discovery-api.js";

export type Error500OddsRelayDiscoveryApi = {
  error: ErrorOddsRelayDiscoveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error500OddsRelayDiscoveryApiSchema: Schema<Error500OddsRelayDiscoveryApi> =
  s.object<Error500OddsRelayDiscoveryApi>(
    {
      error: errorOddsRelayDiscoveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
