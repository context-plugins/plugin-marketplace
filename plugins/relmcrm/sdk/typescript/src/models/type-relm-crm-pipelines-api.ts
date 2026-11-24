import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Semantic type; default open. */
export const TypeRelmCrmPipelinesApi = {
  Open: "open",
  Won: "won",
  Lost: "lost",
} as const;
export type TypeRelmCrmPipelinesApi =
  | (typeof TypeRelmCrmPipelinesApi)[keyof typeof TypeRelmCrmPipelinesApi]
  | (string & {});

export const typeRelmCrmPipelinesApiSchema: EnumSchema<TypeRelmCrmPipelinesApi> =
  s.enumOf<TypeRelmCrmPipelinesApi>(TypeRelmCrmPipelinesApi);
