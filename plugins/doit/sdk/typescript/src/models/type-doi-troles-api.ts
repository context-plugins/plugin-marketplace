import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the role (preset or custom). */
export const TypeDoiTRolesApi = {
  Preset: "preset",
  Custom: "custom",
} as const;
export type TypeDoiTRolesApi = (typeof TypeDoiTRolesApi)[keyof typeof TypeDoiTRolesApi] | (string & {});

export const typeDoiTRolesApiSchema: EnumSchema<TypeDoiTRolesApi> =
  s.enumOf<TypeDoiTRolesApi>(TypeDoiTRolesApi);
