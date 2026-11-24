import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error7OddsRelayServiceApiSchema,
  type Error7OddsRelayServiceApi,
} from "./error7-odds-relay-service-api.js";

export type Error401OddsRelayServiceApi = {
  error: Error7OddsRelayServiceApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error401OddsRelayServiceApiSchema: Schema<Error401OddsRelayServiceApi> =
  s.object<Error401OddsRelayServiceApi>(
    {
      error: error7OddsRelayServiceApiSchema,
    },
    { additionalProperties: s.json() },
  );
