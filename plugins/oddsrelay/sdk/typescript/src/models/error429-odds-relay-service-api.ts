import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error6Schema, type Error6 } from "./error6.js";

export type Error429OddsRelayServiceApi = {
  error: Error6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error429OddsRelayServiceApiSchema: Schema<Error429OddsRelayServiceApi> =
  s.object<Error429OddsRelayServiceApi>(
    {
      error: error6Schema,
    },
    { additionalProperties: s.json() },
  );
