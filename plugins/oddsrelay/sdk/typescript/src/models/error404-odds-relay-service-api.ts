import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type Error404OddsRelayServiceApi = {
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error404OddsRelayServiceApiSchema: Schema<Error404OddsRelayServiceApi> =
  s.object<Error404OddsRelayServiceApi>(
    {
      error: errorSchema,
    },
    { additionalProperties: s.json() },
  );
