import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget52 = {
  Comprehend20171127StartEventsDetectionJob: "Comprehend_20171127.StartEventsDetectionJob",
} as const;
export type XAmzTarget52 = (typeof XAmzTarget52)[keyof typeof XAmzTarget52] | (string & {});

export const xAmzTarget52Schema: EnumSchema<XAmzTarget52> = s.enumOf<XAmzTarget52>(XAmzTarget52);
