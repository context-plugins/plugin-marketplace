import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget9 = {
  Comprehend20171127DetectEntities: "Comprehend_20171127.DetectEntities",
} as const;
export type XAmzTarget9 = (typeof XAmzTarget9)[keyof typeof XAmzTarget9] | (string & {});

export const xAmzTarget9Schema: EnumSchema<XAmzTarget9> = s.enumOf<XAmzTarget9>(XAmzTarget9);
