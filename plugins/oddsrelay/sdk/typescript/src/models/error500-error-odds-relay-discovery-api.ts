import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorOddsRelayDiscoveryApiSchema,
  type ErrorOddsRelayDiscoveryApi,
} from "./error-odds-relay-discovery-api.js";

export type Error500ErrorOddsRelayDiscoveryApi = {
  error: ErrorOddsRelayDiscoveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error500ErrorOddsRelayDiscoveryApiSchema: Schema<Error500ErrorOddsRelayDiscoveryApi> =
  s.object<Error500ErrorOddsRelayDiscoveryApi>(
    {
      error: errorOddsRelayDiscoveryApiSchema,
    },
    { additionalProperties: s.json() },
  );
