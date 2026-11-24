import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phraseSet2Schema, type PhraseSet2 } from "./phrase-set2.js";

/** Message sent by the client for the `CreatePhraseSet` method. */
export type CreatePhraseSetRequest = {
  /**
   * Required. The ID to use for the phrase set, which will become the final component of the phrase
   * set's resource name. This value should restrict to letters, numbers, and hyphens, with the
   * first character a letter, the last a letter or a number, and be 4-63 characters.
   */
  phraseSetId?: string;
  /** Required. The phrase set to create. */
  phraseSet?: PhraseSet2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createPhraseSetRequestSchema: Schema<CreatePhraseSetRequest> = s.object<CreatePhraseSetRequest>(
  {
    phraseSetId: s.optional(s.string()),
    phraseSet: s.optional(s.lazy(() => phraseSet2Schema)),
  },
  { additionalProperties: s.json() },
);
