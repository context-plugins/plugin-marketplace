import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The selection to filter by input mode for the conversation logs. */
export const InputModeAmazonLexModelBuildingV2TestsetgenerationsApi = {
  Speech: "Speech",
  Text: "Text",
} as const;
export type InputModeAmazonLexModelBuildingV2TestsetgenerationsApi =
  | (typeof InputModeAmazonLexModelBuildingV2TestsetgenerationsApi)[keyof typeof InputModeAmazonLexModelBuildingV2TestsetgenerationsApi]
  | (string & {});

export const inputModeAmazonLexModelBuildingV2TestsetgenerationsApiSchema: EnumSchema<InputModeAmazonLexModelBuildingV2TestsetgenerationsApi> =
  s.enumOf<InputModeAmazonLexModelBuildingV2TestsetgenerationsApi>(
    InputModeAmazonLexModelBuildingV2TestsetgenerationsApi,
  );
