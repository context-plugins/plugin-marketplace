import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HasRenderCustomizations = {
  On: "on",
  Off: "off",
  Both: "both",
} as const;
export type HasRenderCustomizations =
  | (typeof HasRenderCustomizations)[keyof typeof HasRenderCustomizations]
  | (string & {});

export const hasRenderCustomizationsSchema: EnumSchema<HasRenderCustomizations> =
  s.enumOf<HasRenderCustomizations>(HasRenderCustomizations);
