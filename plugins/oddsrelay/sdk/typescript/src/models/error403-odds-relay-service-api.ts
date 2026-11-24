import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

export type Error403OddsRelayServiceApi = {
  error: Error1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error403OddsRelayServiceApiSchema: Schema<Error403OddsRelayServiceApi> =
  s.object<Error403OddsRelayServiceApi>(
    {
      error: error1Schema,
    },
    { additionalProperties: s.json() },
  );
