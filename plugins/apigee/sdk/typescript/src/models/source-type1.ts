import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SourceType1 = {
  SourceTypeUnspecified: "SOURCE_TYPE_UNSPECIFIED",
  GcpXlb: "GCP_XLB",
  GcpIlb: "GCP_ILB",
} as const;
export type SourceType1 = (typeof SourceType1)[keyof typeof SourceType1] | (string & {});

export const sourceType1Schema: EnumSchema<SourceType1> = s.enumOf<SourceType1>(SourceType1);
