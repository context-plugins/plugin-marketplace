import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeCoreAnalyticsApi = {
  Error: "error",
} as const;
export type TypeCoreAnalyticsApi =
  | (typeof TypeCoreAnalyticsApi)[keyof typeof TypeCoreAnalyticsApi]
  | (string & {});

export const typeCoreAnalyticsApiSchema: EnumSchema<TypeCoreAnalyticsApi> =
  s.enumOf<TypeCoreAnalyticsApi>(TypeCoreAnalyticsApi);
