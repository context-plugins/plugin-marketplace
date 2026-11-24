import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The cache instance type. Valid values are SMALL MEDIUM LARGE XLARGE LARGE_2X LARGE_4X LARGE_8X
 * (not available in all regions) LARGE_12X Historically, instance types were identified by an
 * EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be
 * used. The following legacy instance types are available, but their use is discouraged: T2_SMALL:
 * A t2.small instance type. T2_MEDIUM: A t2.medium instance type. R4_LARGE: A r4.large instance
 * type. R4_XLARGE: A r4.xlarge instance type. R4_2XLARGE: A r4.2xlarge instance type. R4_4XLARGE: A
 * r4.4xlarge instance type.
 */
export const Type = {
  T2Small: "T2_SMALL",
  T2Medium: "T2_MEDIUM",
  R4Large: "R4_LARGE",
  R4Xlarge: "R4_XLARGE",
  R42Xlarge: "R4_2XLARGE",
  R44Xlarge: "R4_4XLARGE",
  R48Xlarge: "R4_8XLARGE",
  Small: "SMALL",
  Medium: "MEDIUM",
  Large: "LARGE",
  Xlarge: "XLARGE",
  Large2X: "LARGE_2X",
  Large4X: "LARGE_4X",
  Large8X: "LARGE_8X",
  Large12X: "LARGE_12X",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
