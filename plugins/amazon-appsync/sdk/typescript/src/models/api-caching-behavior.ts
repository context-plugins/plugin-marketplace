import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Caching behavior. FULL_REQUEST_CACHING: All requests from the same user are cached. Individual
 * resolvers are automatically cached. All API calls will try to return responses from the cache.
 * PER_RESOLVER_CACHING: Individual resolvers that you specify are cached. OPERATION_LEVEL_CACHING:
 * Full requests are cached together and returned without executing resolvers.
 */
export const ApiCachingBehavior = {
  FullRequestCaching: "FULL_REQUEST_CACHING",
  PerResolverCaching: "PER_RESOLVER_CACHING",
  OperationLevelCaching: "OPERATION_LEVEL_CACHING",
} as const;
export type ApiCachingBehavior = (typeof ApiCachingBehavior)[keyof typeof ApiCachingBehavior] | (string & {});

export const apiCachingBehaviorSchema: EnumSchema<ApiCachingBehavior> =
  s.enumOf<ApiCachingBehavior>(ApiCachingBehavior);
