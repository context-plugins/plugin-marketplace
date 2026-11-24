import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of resource that was imported. */
export const ImportedResourceType = {
  Bot: "Bot",
  BotLocale: "BotLocale",
  CustomVocabulary: "CustomVocabulary",
  TestSet: "TestSet",
} as const;
export type ImportedResourceType =
  | (typeof ImportedResourceType)[keyof typeof ImportedResourceType]
  | (string & {});

export const importedResourceTypeSchema: EnumSchema<ImportedResourceType> =
  s.enumOf<ImportedResourceType>(ImportedResourceType);
