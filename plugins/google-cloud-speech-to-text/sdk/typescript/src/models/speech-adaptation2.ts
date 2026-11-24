import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { abnfGrammar2Schema, type AbnfGrammar2 } from "./abnf-grammar2.js";
import { customClassSchema, type CustomClass } from "./custom-class.js";
import { phraseSetSchema, type PhraseSet } from "./phrase-set.js";

/**
 * Speech adaptation configuration improves the accuracy of speech recognition. For more
 * information, see the [speech adaptation](https://cloud.google.com/speech-to-text/docs/adaptation)
 * documentation. When speech adaptation is set it supersedes the `speech_contexts` field.
 */
export type SpeechAdaptation2 = {
  /**
   * Augmented Backus-Naur form (ABNF) is a standardized grammar notation comprised by a set of
   * derivation rules. See specifications: https://www.w3.org/TR/speech-grammar
   */
  abnfGrammar?: AbnfGrammar2;
  /** A collection of phrase set resource names to use. */
  phraseSetReferences?: string[];
  /**
   * A collection of custom classes. To specify the classes inline, leave the class' `name` blank
   * and fill in the rest of its fields, giving it a unique `custom_class_id`. Refer to the inline
   * defined class in phrase hints by its `custom_class_id`.
   */
  customClasses?: CustomClass[];
  /**
   * A collection of phrase sets. To specify the hints inline, leave the phrase set's `name` blank
   * and fill in the rest of its fields. Any phrase set can use any custom class.
   */
  phraseSets?: PhraseSet[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const speechAdaptation2Schema: Schema<SpeechAdaptation2> = s.object<SpeechAdaptation2>(
  {
    abnfGrammar: s.optional(s.lazy(() => abnfGrammar2Schema)),
    phraseSetReferences: s.optional(s.array(s.string())),
    customClasses: s.optional(s.array(s.lazy(() => customClassSchema))),
    phraseSets: s.optional(s.array(s.lazy(() => phraseSetSchema))),
  },
  { additionalProperties: s.json() },
);
