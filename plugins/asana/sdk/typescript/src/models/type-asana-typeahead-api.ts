import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeAsanaTypeaheadApi = {
  CustomField: "custom_field",
  Portfolio: "portfolio",
  Project: "project",
  Tag: "tag",
  Task: "task",
  User: "user",
} as const;
export type TypeAsanaTypeaheadApi =
  | (typeof TypeAsanaTypeaheadApi)[keyof typeof TypeAsanaTypeaheadApi]
  | (string & {});

export const typeAsanaTypeaheadApiSchema: EnumSchema<TypeAsanaTypeaheadApi> =
  s.enumOf<TypeAsanaTypeaheadApi>(TypeAsanaTypeaheadApi);
