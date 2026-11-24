import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContentClassifier = {
  FreeOfPersonallyIdentifiableInformation: "FreeOfPersonallyIdentifiableInformation",
  FreeOfAdultContent: "FreeOfAdultContent",
} as const;
export type ContentClassifier = (typeof ContentClassifier)[keyof typeof ContentClassifier] | (string & {});

export const contentClassifierSchema: EnumSchema<ContentClassifier> =
  s.enumOf<ContentClassifier>(ContentClassifier);
