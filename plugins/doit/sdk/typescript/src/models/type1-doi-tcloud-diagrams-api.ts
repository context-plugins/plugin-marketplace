import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Component bucket the anchor lives in. */
export const Type1DoiTCloudDiagramsApi = {
  Node: "node",
  Element: "element",
  Group: "group",
} as const;
export type Type1DoiTCloudDiagramsApi =
  | (typeof Type1DoiTCloudDiagramsApi)[keyof typeof Type1DoiTCloudDiagramsApi]
  | (string & {});

export const type1DoiTCloudDiagramsApiSchema: EnumSchema<Type1DoiTCloudDiagramsApi> =
  s.enumOf<Type1DoiTCloudDiagramsApi>(Type1DoiTCloudDiagramsApi);
