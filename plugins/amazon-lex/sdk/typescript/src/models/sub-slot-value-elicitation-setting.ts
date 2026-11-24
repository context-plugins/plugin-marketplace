import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { promptSpecificationSchema, type PromptSpecification } from "./prompt-specification.js";
import { sampleUtteranceSchema, type SampleUtterance } from "./sample-utterance.js";
import {
  slotDefaultValueSpecificationSchema,
  type SlotDefaultValueSpecification,
} from "./slot-default-value-specification.js";
import {
  waitAndContinueSpecificationSchema,
  type WaitAndContinueSpecification,
} from "./wait-and-continue-specification.js";

export type SubSlotValueElicitationSetting = {
  defaultValueSpecification?: SlotDefaultValueSpecification;
  promptSpecification: PromptSpecification;
  /**
   * If you know a specific pattern that users might respond to an Amazon Lex request for a sub slot
   * value, you can provide those utterances to improve accuracy. This is optional. In most cases
   * Amazon Lex is capable of understanding user utterances. This is similar to SampleUtterances for
   * slots.
   */
  sampleUtterances?: SampleUtterance[];
  waitAndContinueSpecification?: WaitAndContinueSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subSlotValueElicitationSettingSchema: Schema<SubSlotValueElicitationSetting> =
  s.object<SubSlotValueElicitationSetting>(
    {
      defaultValueSpecification: s.optional(s.lazy(() => slotDefaultValueSpecificationSchema)),
      promptSpecification: promptSpecificationSchema,
      sampleUtterances: s.optional(s.array(s.lazy(() => sampleUtteranceSchema))),
      waitAndContinueSpecification: s.optional(s.lazy(() => waitAndContinueSpecificationSchema)),
    },
    { additionalProperties: s.json() },
  );
