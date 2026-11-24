import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API
 * (MERGED).
 */
export const ApiType = {
  Graphql: "GRAPHQL",
  Merged: "MERGED",
} as const;
export type ApiType = (typeof ApiType)[keyof typeof ApiType] | (string & {});

export const apiTypeSchema: EnumSchema<ApiType> = s.enumOf<ApiType>(ApiType);
