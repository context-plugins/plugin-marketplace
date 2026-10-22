import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UiOptions = {
  None: "NONE",
  SearchResult: "SEARCH_RESULT",
  DocHovercard: "DOC_HOVERCARD",
} as const;
export type UiOptions = (typeof UiOptions)[keyof typeof UiOptions] | (string & {});

export const uiOptionsSchema: EnumSchema<UiOptions> = s.enumOf<UiOptions>(UiOptions);
