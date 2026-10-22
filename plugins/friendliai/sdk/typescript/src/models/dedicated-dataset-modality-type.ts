import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Modality type. */
export const DedicatedDatasetModalityType = {
  Video: "VIDEO",
  Image: "IMAGE",
  Audio: "AUDIO",
  Text: "TEXT",
} as const;
export type DedicatedDatasetModalityType =
  | (typeof DedicatedDatasetModalityType)[keyof typeof DedicatedDatasetModalityType]
  | (string & {});

export const dedicatedDatasetModalityTypeSchema: EnumSchema<DedicatedDatasetModalityType> =
  s.enumOf<DedicatedDatasetModalityType>(DedicatedDatasetModalityType);
