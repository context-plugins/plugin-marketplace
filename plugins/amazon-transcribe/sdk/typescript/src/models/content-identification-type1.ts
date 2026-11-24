import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Labels all personal health information (PHI) identified in your transcript. For more information,
 * see Identifying personal health information (PHI) in a transcription.
 */
export const ContentIdentificationType1 = {
  Phi: "PHI",
} as const;
export type ContentIdentificationType1 =
  | (typeof ContentIdentificationType1)[keyof typeof ContentIdentificationType1]
  | (string & {});

export const contentIdentificationType1Schema: EnumSchema<ContentIdentificationType1> =
  s.enumOf<ContentIdentificationType1>(ContentIdentificationType1);
