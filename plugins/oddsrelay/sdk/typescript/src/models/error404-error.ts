import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error4OddsRelayDiscoveryApiSchema,
  type Error4OddsRelayDiscoveryApi,
} from "./error4-odds-relay-discovery-api.js";

export type Error404Error = {
  error: Error4OddsRelayDiscoveryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error404ErrorSchema: Schema<Error404Error> = s.object<Error404Error>(
  {
    error: error4OddsRelayDiscoveryApiSchema,
  },
  { additionalProperties: s.json() },
);
