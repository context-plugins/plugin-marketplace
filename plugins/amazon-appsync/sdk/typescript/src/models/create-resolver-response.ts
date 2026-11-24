import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resolverSchema, type Resolver } from "./resolver.js";

export type CreateResolverResponse = {
  resolver?: Resolver;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createResolverResponseSchema: Schema<CreateResolverResponse> = s.object<CreateResolverResponse>(
  {
    resolver: s.optional(s.lazy(() => resolverSchema)),
  },
  { additionalProperties: s.json() },
);
