import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget61 = {
  Comprehend20171127ListPiiEntitiesDetectionJobs: "Comprehend_20171127.ListPiiEntitiesDetectionJobs",
} as const;
export type XAmzTarget61 = (typeof XAmzTarget61)[keyof typeof XAmzTarget61] | (string & {});

export const xAmzTarget61Schema: EnumSchema<XAmzTarget61> = s.enumOf<XAmzTarget61>(XAmzTarget61);
