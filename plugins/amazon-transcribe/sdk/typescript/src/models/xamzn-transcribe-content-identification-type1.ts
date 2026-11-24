import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribeContentIdentificationType1 = {
  Phi: "PHI",
} as const;
export type XAmznTranscribeContentIdentificationType1 =
  | (typeof XAmznTranscribeContentIdentificationType1)[keyof typeof XAmznTranscribeContentIdentificationType1]
  | (string & {});

export const xAmznTranscribeContentIdentificationType1Schema: EnumSchema<XAmznTranscribeContentIdentificationType1> =
  s.enumOf<XAmznTranscribeContentIdentificationType1>(XAmznTranscribeContentIdentificationType1);
