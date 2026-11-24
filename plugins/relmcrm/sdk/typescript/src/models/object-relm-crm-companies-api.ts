import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ObjectRelmCrmCompaniesApi = {
  List: "list",
} as const;
export type ObjectRelmCrmCompaniesApi =
  | (typeof ObjectRelmCrmCompaniesApi)[keyof typeof ObjectRelmCrmCompaniesApi]
  | (string & {});

export const objectRelmCrmCompaniesApiSchema: EnumSchema<ObjectRelmCrmCompaniesApi> =
  s.enumOf<ObjectRelmCrmCompaniesApi>(ObjectRelmCrmCompaniesApi);
