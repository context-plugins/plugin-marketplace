import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { graphqlApiSchema, type GraphqlApi } from "./graphql-api.js";

export type GetGraphqlApiResponse = {
  graphqlApi?: GraphqlApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getGraphqlApiResponseSchema: Schema<GetGraphqlApiResponse> = s.object<GetGraphqlApiResponse>(
  {
    graphqlApi: s.optional(s.lazy(() => graphqlApiSchema)),
  },
  { additionalProperties: s.json() },
);
