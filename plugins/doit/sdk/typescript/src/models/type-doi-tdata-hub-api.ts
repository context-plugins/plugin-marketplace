import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The dimension type. */
export const TypeDoiTDataHubApi = {
  Fixed: "fixed",
  Label: "label",
  ProjectLabel: "project_label",
  SystemLabel: "system_label",
} as const;
export type TypeDoiTDataHubApi = (typeof TypeDoiTDataHubApi)[keyof typeof TypeDoiTDataHubApi] | (string & {});

export const typeDoiTDataHubApiSchema: EnumSchema<TypeDoiTDataHubApi> =
  s.enumOf<TypeDoiTDataHubApi>(TypeDoiTDataHubApi);
