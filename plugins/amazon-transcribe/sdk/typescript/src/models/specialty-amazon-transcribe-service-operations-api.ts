import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the medical specialty that you specified in your request. */
export const SpecialtyAmazonTranscribeServiceOperationsApi = {
  Primarycare: "PRIMARYCARE",
  Cardiology: "CARDIOLOGY",
  Neurology: "NEUROLOGY",
  Oncology: "ONCOLOGY",
  Radiology: "RADIOLOGY",
  Urology: "UROLOGY",
} as const;
export type SpecialtyAmazonTranscribeServiceOperationsApi =
  | (typeof SpecialtyAmazonTranscribeServiceOperationsApi)[keyof typeof SpecialtyAmazonTranscribeServiceOperationsApi]
  | (string & {});

export const specialtyAmazonTranscribeServiceOperationsApiSchema: EnumSchema<SpecialtyAmazonTranscribeServiceOperationsApi> =
  s.enumOf<SpecialtyAmazonTranscribeServiceOperationsApi>(SpecialtyAmazonTranscribeServiceOperationsApi);
