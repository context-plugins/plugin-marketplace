import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error4OddsRelayDiscoveryApiSchema,
  type Error4OddsRelayDiscoveryApi,
} from "./error4-odds-relay-discovery-api.js";

export type Error404 = {
  error: Error4OddsRelayDiscoveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error404Schema: Schema<Error404> = s.object<Error404>(
  {
    error: error4OddsRelayDiscoveryApiSchema,
  },
  { additionalProperties: s.json() },
);
