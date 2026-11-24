import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AudioSpecification = {
  /**
   * Time for how long Amazon Lex waits before speech input is truncated and the speech is returned
   * to application.
   */
  maxLengthMs: number;
  /**
   * Time for which a bot waits after the customer stops speaking to assume the utterance is
   * finished.
   */
  endTimeoutMs: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audioSpecificationSchema: Schema<AudioSpecification> = s.object<AudioSpecification>(
  {
    maxLengthMs: s.int(),
    endTimeoutMs: s.int(),
  },
  { additionalProperties: s.json() },
);
