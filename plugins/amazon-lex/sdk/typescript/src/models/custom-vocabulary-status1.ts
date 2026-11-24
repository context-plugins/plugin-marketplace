import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the custom vocabulary. If the status is Ready the custom vocabulary is ready to
 * use.
 */
export const CustomVocabularyStatus1 = {
  Ready: "Ready",
  Deleting: "Deleting",
  Exporting: "Exporting",
  Importing: "Importing",
  Creating: "Creating",
} as const;
export type CustomVocabularyStatus1 =
  | (typeof CustomVocabularyStatus1)[keyof typeof CustomVocabularyStatus1]
  | (string & {});

export const customVocabularyStatus1Schema: EnumSchema<CustomVocabularyStatus1> =
  s.enumOf<CustomVocabularyStatus1>(CustomVocabularyStatus1);
