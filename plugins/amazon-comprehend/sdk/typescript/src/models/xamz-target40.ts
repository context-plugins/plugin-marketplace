import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget40 = {
  Comprehend20171127ListDocumentClassificationJobs: "Comprehend_20171127.ListDocumentClassificationJobs",
} as const;
export type XAmzTarget40 = (typeof XAmzTarget40)[keyof typeof XAmzTarget40] | (string & {});

export const xAmzTarget40Schema: EnumSchema<XAmzTarget40> = s.enumOf<XAmzTarget40>(XAmzTarget40);
