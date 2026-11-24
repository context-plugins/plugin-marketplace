import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget76 = {
  Comprehend20171127ListDocumentClassifierSummaries: "Comprehend_20171127.ListDocumentClassifierSummaries",
} as const;
export type XAmzTarget76 = (typeof XAmzTarget76)[keyof typeof XAmzTarget76] | (string & {});

export const xAmzTarget76Schema: EnumSchema<XAmzTarget76> = s.enumOf<XAmzTarget76>(XAmzTarget76);
