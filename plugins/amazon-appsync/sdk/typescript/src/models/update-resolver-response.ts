import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resolverSchema, type Resolver } from "./resolver.js";

export type UpdateResolverResponse = {
  resolver?: Resolver;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateResolverResponseSchema: Schema<UpdateResolverResponse> = s.object<UpdateResolverResponse>(
  {
    resolver: s.optional(s.lazy(() => resolverSchema)),
  },
  { additionalProperties: s.json() },
);
