import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of removing the custom vocabulary. */
export const CustomVocabularyStatus = {
  Ready: "Ready",
  Deleting: "Deleting",
  Exporting: "Exporting",
  Importing: "Importing",
  Creating: "Creating",
} as const;
export type CustomVocabularyStatus =
  | (typeof CustomVocabularyStatus)[keyof typeof CustomVocabularyStatus]
  | (string & {});

export const customVocabularyStatusSchema: EnumSchema<CustomVocabularyStatus> =
  s.enumOf<CustomVocabularyStatus>(CustomVocabularyStatus);
