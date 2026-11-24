import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAlphaiTruncated = {
  RowCap: "row_cap",
  ArchiveHorizon: "archive_horizon",
  False: "false",
} as const;
export type XAlphaiTruncated = (typeof XAlphaiTruncated)[keyof typeof XAlphaiTruncated] | (string & {});

export const xAlphaiTruncatedSchema: EnumSchema<XAlphaiTruncated> =
  s.enumOf<XAlphaiTruncated>(XAlphaiTruncated);
