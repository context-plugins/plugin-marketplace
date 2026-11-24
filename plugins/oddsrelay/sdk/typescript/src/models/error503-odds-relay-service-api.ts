import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";

export type Error503OddsRelayServiceApi = {
  error: Error2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error503OddsRelayServiceApiSchema: Schema<Error503OddsRelayServiceApi> =
  s.object<Error503OddsRelayServiceApi>(
    {
      error: error2Schema,
    },
    { additionalProperties: s.json() },
  );
