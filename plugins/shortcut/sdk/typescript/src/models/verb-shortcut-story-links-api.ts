import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of link. */
export const VerbShortcutStoryLinksApi = {
  Blocks: "blocks",
  Duplicates: "duplicates",
  RelatesTo: "relates to",
} as const;
export type VerbShortcutStoryLinksApi =
  | (typeof VerbShortcutStoryLinksApi)[keyof typeof VerbShortcutStoryLinksApi]
  | (string & {});

export const verbShortcutStoryLinksApiSchema: EnumSchema<VerbShortcutStoryLinksApi> =
  s.enumOf<VerbShortcutStoryLinksApi>(VerbShortcutStoryLinksApi);
