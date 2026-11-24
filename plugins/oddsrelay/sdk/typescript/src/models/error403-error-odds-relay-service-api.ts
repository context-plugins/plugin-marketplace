import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

export type Error403ErrorOddsRelayServiceApi = {
  error: Error1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error403ErrorOddsRelayServiceApiSchema: Schema<Error403ErrorOddsRelayServiceApi> =
  s.object<Error403ErrorOddsRelayServiceApi>(
    {
      error: error1Schema,
    },
    { additionalProperties: s.json() },
  );
