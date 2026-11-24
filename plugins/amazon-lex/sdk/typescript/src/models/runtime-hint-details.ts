import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runtimeHintValueSchema, type RuntimeHintValue } from "./runtime-hint-value.js";

export type RuntimeHintDetails = {
  /**
   * One or more strings that Amazon Lex should look for in the input to the bot. Each phrase is
   * given preference when deciding on slot values.
   */
  runtimeHintValues?: RuntimeHintValue[];
  /**
   * A map of constituent sub slot names inside a composite slot in the intent and the phrases that
   * should be added for each sub slot. Inside each composite slot hints, this structure provides a
   * mechanism to add granular sub slot phrases. Only sub slot hints are supported for composite
   * slots. The intent name, composite slot name and the constituent sub slot names must exist.
   */
  subSlotHints?: Record<string, RuntimeHintDetails>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeHintDetailsSchema: Schema<RuntimeHintDetails> = s.object<RuntimeHintDetails>(
  {
    runtimeHintValues: s.optional(s.array(s.lazy(() => runtimeHintValueSchema))),
    subSlotHints: s.optional(
      s.record(
        s.string(),
        s.lazy(() => runtimeHintDetailsSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
