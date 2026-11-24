import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget34 = {
  CodeBuild20161006ListCuratedEnvironmentImages: "CodeBuild_20161006.ListCuratedEnvironmentImages",
} as const;
export type XAmzTarget34 = (typeof XAmzTarget34)[keyof typeof XAmzTarget34] | (string & {});

export const xAmzTarget34Schema: EnumSchema<XAmzTarget34> = s.enumOf<XAmzTarget34>(XAmzTarget34);
