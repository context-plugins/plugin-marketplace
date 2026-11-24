import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeJuriSignTemplatesApi = {
  Signature: "signature",
  Text: "text",
  Date: "date",
  Checkbox: "checkbox",
} as const;
export type TypeJuriSignTemplatesApi =
  | (typeof TypeJuriSignTemplatesApi)[keyof typeof TypeJuriSignTemplatesApi]
  | (string & {});

export const typeJuriSignTemplatesApiSchema: EnumSchema<TypeJuriSignTemplatesApi> =
  s.enumOf<TypeJuriSignTemplatesApi>(TypeJuriSignTemplatesApi);
