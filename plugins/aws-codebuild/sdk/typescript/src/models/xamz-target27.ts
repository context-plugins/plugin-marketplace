import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget27 = {
  CodeBuild20161006ImportSourceCredentials: "CodeBuild_20161006.ImportSourceCredentials",
} as const;
export type XAmzTarget27 = (typeof XAmzTarget27)[keyof typeof XAmzTarget27] | (string & {});

export const xAmzTarget27Schema: EnumSchema<XAmzTarget27> = s.enumOf<XAmzTarget27>(XAmzTarget27);
