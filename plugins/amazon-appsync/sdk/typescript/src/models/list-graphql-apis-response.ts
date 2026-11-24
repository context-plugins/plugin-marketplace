import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { graphqlApiSchema, type GraphqlApi } from "./graphql-api.js";

export type ListGraphqlApisResponse = {
  /** The GraphqlApi objects. */
  graphqlApis?: GraphqlApi[];
  /**
   * An identifier to pass in the next request to this operation to return the next set of items in
   * the list.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listGraphqlApisResponseSchema: Schema<ListGraphqlApisResponse> =
  s.object<ListGraphqlApisResponse>(
    {
      graphqlApis: s.optional(s.array(s.lazy(() => graphqlApiSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
