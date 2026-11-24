import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetGraphqlApiEnvironmentVariablesResponse = {
  /** The payload containing each environmental variable in the "key" : "value" format. */
  environmentVariables?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getGraphqlApiEnvironmentVariablesResponseSchema: Schema<GetGraphqlApiEnvironmentVariablesResponse> =
  s.object<GetGraphqlApiEnvironmentVariablesResponse>(
    {
      environmentVariables: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
