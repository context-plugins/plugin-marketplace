import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribeSpecialty = {
  Primarycare: "PRIMARYCARE",
  Cardiology: "CARDIOLOGY",
  Neurology: "NEUROLOGY",
  Oncology: "ONCOLOGY",
  Radiology: "RADIOLOGY",
  Urology: "UROLOGY",
} as const;
export type XAmznTranscribeSpecialty =
  | (typeof XAmznTranscribeSpecialty)[keyof typeof XAmznTranscribeSpecialty]
  | (string & {});

export const xAmznTranscribeSpecialtySchema: EnumSchema<XAmznTranscribeSpecialty> =
  s.enumOf<XAmznTranscribeSpecialty>(XAmznTranscribeSpecialty);
