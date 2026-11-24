import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget15 = {
  CodeBuild20161006BatchGetReports: "CodeBuild_20161006.BatchGetReports",
} as const;
export type XAmzTarget15 = (typeof XAmzTarget15)[keyof typeof XAmzTarget15] | (string & {});

export const xAmzTarget15Schema: EnumSchema<XAmzTarget15> = s.enumOf<XAmzTarget15>(XAmzTarget15);
