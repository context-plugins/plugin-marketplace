import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Object1RelmCrmCompaniesApi = {
  Company: "company",
} as const;
export type Object1RelmCrmCompaniesApi =
  | (typeof Object1RelmCrmCompaniesApi)[keyof typeof Object1RelmCrmCompaniesApi]
  | (string & {});

export const object1RelmCrmCompaniesApiSchema: EnumSchema<Object1RelmCrmCompaniesApi> =
  s.enumOf<Object1RelmCrmCompaniesApi>(Object1RelmCrmCompaniesApi);
