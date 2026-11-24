import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ApisEnvironmentVariablesRequest = {
  /**
   * The list of environmental variables to add to the API. When creating an environmental variable
   * key-value pair, it must follow the additional constraints below: Keys must begin with a letter.
   * Keys must be at least two characters long. Keys can only contain letters, numbers, and the
   * underscore character (_). Values can be up to 512 characters long. You can configure up to 50
   * key-value pairs in a GraphQL API. You can create a list of environmental variables by adding it
   * to the environmentVariables payload as a list in the format {"key1":"value1","key2":"value2",
   * …}. Note that each call of the Put
   */
  environmentVariables: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ApisEnvironmentVariablesRequestSchema: Schema<V1ApisEnvironmentVariablesRequest> =
  s.object<V1ApisEnvironmentVariablesRequest>(
    {
      environmentVariables: s.record(s.string(), s.string()),
    },
    { additionalProperties: s.json() },
  );
