import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of schema being defined. Always `json`. */
export const TypeParallelAiFindAllApi = {
  Json: "json",
} as const;
export type TypeParallelAiFindAllApi =
  | (typeof TypeParallelAiFindAllApi)[keyof typeof TypeParallelAiFindAllApi]
  | (string & {});

export const typeParallelAiFindAllApiSchema: EnumSchema<TypeParallelAiFindAllApi> =
  s.enumOf<TypeParallelAiFindAllApi>(TypeParallelAiFindAllApi);
