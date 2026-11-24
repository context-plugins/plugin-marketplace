import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How story citations are resolved. Accepts STORY or TOP_ARTICLE. */
export const StoryCitationResolvingType = {
  Story: "STORY",
  TopArticle: "TOP_ARTICLE",
} as const;
export type StoryCitationResolvingType =
  | (typeof StoryCitationResolvingType)[keyof typeof StoryCitationResolvingType]
  | (string & {});

export const storyCitationResolvingTypeSchema: EnumSchema<StoryCitationResolvingType> =
  s.enumOf<StoryCitationResolvingType>(StoryCitationResolvingType);
