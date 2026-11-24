import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DtmfSpecification = {
  /** The maximum number of DTMF digits allowed in an utterance. */
  maxLength: number;
  /**
   * How long the bot should wait after the last DTMF character input before assuming that the input
   * has concluded.
   */
  endTimeoutMs: number;
  /** The DTMF character that clears the accumulated DTMF digits and immediately ends the input. */
  deletionCharacter: string;
  /**
   * The DTMF character that immediately ends input. If the user does not press this character, the
   * input ends after the end timeout.
   */
  endCharacter: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dtmfSpecificationSchema: Schema<DtmfSpecification> = s.object<DtmfSpecification>(
  {
    maxLength: s.int(),
    endTimeoutMs: s.int(),
    deletionCharacter: s.string(),
    endCharacter: s.string(),
  },
  { additionalProperties: s.json() },
);
