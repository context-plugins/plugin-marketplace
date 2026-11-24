import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget20 = {
  CodeBuild20161006DeleteBuildBatch: "CodeBuild_20161006.DeleteBuildBatch",
} as const;
export type XAmzTarget20 = (typeof XAmzTarget20)[keyof typeof XAmzTarget20] | (string & {});

export const xAmzTarget20Schema: EnumSchema<XAmzTarget20> = s.enumOf<XAmzTarget20>(XAmzTarget20);
