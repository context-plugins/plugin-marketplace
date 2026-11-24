import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget73 = {
  Comprehend20171127ListTopicsDetectionJobs: "Comprehend_20171127.ListTopicsDetectionJobs",
} as const;
export type XAmzTarget73 = (typeof XAmzTarget73)[keyof typeof XAmzTarget73] | (string & {});

export const xAmzTarget73Schema: EnumSchema<XAmzTarget73> = s.enumOf<XAmzTarget73>(XAmzTarget73);
