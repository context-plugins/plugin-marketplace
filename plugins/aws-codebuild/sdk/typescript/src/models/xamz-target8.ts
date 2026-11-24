import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget8 = {
  CodeBuild20161006DeleteProject: "CodeBuild_20161006.DeleteProject",
} as const;
export type XAmzTarget8 = (typeof XAmzTarget8)[keyof typeof XAmzTarget8] | (string & {});

export const xAmzTarget8Schema: EnumSchema<XAmzTarget8> = s.enumOf<XAmzTarget8>(XAmzTarget8);
