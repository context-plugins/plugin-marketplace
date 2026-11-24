import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type Error404ErrorOddsRelayServiceApi = {
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error404ErrorOddsRelayServiceApiSchema: Schema<Error404ErrorOddsRelayServiceApi> =
  s.object<Error404ErrorOddsRelayServiceApi>(
    {
      error: errorSchema,
    },
    { additionalProperties: s.json() },
  );
