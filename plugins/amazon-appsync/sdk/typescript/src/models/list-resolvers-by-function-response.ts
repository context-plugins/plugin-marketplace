import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resolverSchema, type Resolver } from "./resolver.js";

export type ListResolversByFunctionResponse = {
  /** The list of resolvers. */
  resolvers?: Resolver[];
  /** An identifier that you can use to return the next set of items in the list. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResolversByFunctionResponseSchema: Schema<ListResolversByFunctionResponse> =
  s.object<ListResolversByFunctionResponse>(
    {
      resolvers: s.optional(s.array(s.lazy(() => resolverSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
