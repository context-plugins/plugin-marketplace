import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Filter mode to apply. When type is "allocation_rule", only "is" and "contains" modes are
 * supported.
 */
export const ModeDoiTAllocationsApi = {
  Is: "is",
  StartsWith: "starts_with",
  EndsWith: "ends_with",
  Contains: "contains",
  Regexp: "regexp",
} as const;
export type ModeDoiTAllocationsApi =
  | (typeof ModeDoiTAllocationsApi)[keyof typeof ModeDoiTAllocationsApi]
  | (string & {});

export const modeDoiTAllocationsApiSchema: EnumSchema<ModeDoiTAllocationsApi> =
  s.enumOf<ModeDoiTAllocationsApi>(ModeDoiTAllocationsApi);
