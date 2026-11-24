import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resolverSchema, type Resolver } from "./resolver.js";

export type ListResolversResponse = {
  /** The Resolver objects. */
  resolvers?: Resolver[];
  /**
   * An identifier to pass in the next request to this operation to return the next set of items in
   * the list.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResolversResponseSchema: Schema<ListResolversResponse> = s.object<ListResolversResponse>(
  {
    resolvers: s.optional(s.array(s.lazy(() => resolverSchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
