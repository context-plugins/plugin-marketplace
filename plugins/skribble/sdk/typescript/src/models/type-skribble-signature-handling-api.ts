import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeSkribbleSignatureHandlingApi = {
  Pdf: "PDF",
  Json: "JSON",
  Html: "HTML",
} as const;
export type TypeSkribbleSignatureHandlingApi =
  | (typeof TypeSkribbleSignatureHandlingApi)[keyof typeof TypeSkribbleSignatureHandlingApi]
  | (string & {});

export const typeSkribbleSignatureHandlingApiSchema: EnumSchema<TypeSkribbleSignatureHandlingApi> =
  s.enumOf<TypeSkribbleSignatureHandlingApi>(TypeSkribbleSignatureHandlingApi);
