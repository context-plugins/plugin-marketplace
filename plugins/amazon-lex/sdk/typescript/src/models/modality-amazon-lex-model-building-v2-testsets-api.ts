import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the test set is audio or text data. */
export const ModalityAmazonLexModelBuildingV2TestsetsApi = {
  Text: "Text",
  Audio: "Audio",
} as const;
export type ModalityAmazonLexModelBuildingV2TestsetsApi =
  | (typeof ModalityAmazonLexModelBuildingV2TestsetsApi)[keyof typeof ModalityAmazonLexModelBuildingV2TestsetsApi]
  | (string & {});

export const modalityAmazonLexModelBuildingV2TestsetsApiSchema: EnumSchema<ModalityAmazonLexModelBuildingV2TestsetsApi> =
  s.enumOf<ModalityAmazonLexModelBuildingV2TestsetsApi>(ModalityAmazonLexModelBuildingV2TestsetsApi);
