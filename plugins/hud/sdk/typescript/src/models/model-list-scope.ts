import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Which catalog rows a model listing returns. */
export const ModelListScope = {
  Catalog: "catalog",
  Owned: "owned",
} as const;
export type ModelListScope = (typeof ModelListScope)[keyof typeof ModelListScope] | (string & {});

export const modelListScopeSchema: EnumSchema<ModelListScope> = s.enumOf<ModelListScope>(ModelListScope);
