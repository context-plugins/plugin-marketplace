import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget18 = {
  CodeBuild20161006DeleteWebhook: "CodeBuild_20161006.DeleteWebhook",
} as const;
export type XAmzTarget18 = (typeof XAmzTarget18)[keyof typeof XAmzTarget18] | (string & {});

export const xAmzTarget18Schema: EnumSchema<XAmzTarget18> = s.enumOf<XAmzTarget18>(XAmzTarget18);
