import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SigningOrderTypeJuriSignTemplatesApi = {
  Parallel: "parallel",
  Sequential: "sequential",
} as const;
export type SigningOrderTypeJuriSignTemplatesApi =
  | (typeof SigningOrderTypeJuriSignTemplatesApi)[keyof typeof SigningOrderTypeJuriSignTemplatesApi]
  | (string & {});

export const signingOrderTypeJuriSignTemplatesApiSchema: EnumSchema<SigningOrderTypeJuriSignTemplatesApi> =
  s.enumOf<SigningOrderTypeJuriSignTemplatesApi>(SigningOrderTypeJuriSignTemplatesApi);
