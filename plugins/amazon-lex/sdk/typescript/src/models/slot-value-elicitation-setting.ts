import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { promptSpecificationSchema, type PromptSpecification } from "./prompt-specification.js";
import { sampleUtteranceSchema, type SampleUtterance } from "./sample-utterance.js";
import { slotCaptureSettingSchema, type SlotCaptureSetting } from "./slot-capture-setting.js";
import { slotConstraintSchema, type SlotConstraint } from "./slot-constraint.js";
import {
  slotDefaultValueSpecificationSchema,
  type SlotDefaultValueSpecification,
} from "./slot-default-value-specification.js";
import { slotResolutionSettingSchema, type SlotResolutionSetting } from "./slot-resolution-setting.js";
import {
  waitAndContinueSpecificationSchema,
  type WaitAndContinueSpecification,
} from "./wait-and-continue-specification.js";

export type SlotValueElicitationSetting = {
  defaultValueSpecification?: SlotDefaultValueSpecification;
  /** Specifies whether the slot is required or optional. */
  slotConstraint: SlotConstraint;
  promptSpecification?: PromptSpecification;
  /**
   * If you know a specific pattern that users might respond to an Amazon Lex request for a slot
   * value, you can provide those utterances to improve accuracy. This is optional. In most cases,
   * Amazon Lex is capable of understanding user utterances.
   */
  sampleUtterances?: SampleUtterance[];
  waitAndContinueSpecification?: WaitAndContinueSpecification;
  slotCaptureSetting?: SlotCaptureSetting;
  slotResolutionSetting?: SlotResolutionSetting;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotValueElicitationSettingSchema: Schema<SlotValueElicitationSetting> =
  s.object<SlotValueElicitationSetting>(
    {
      defaultValueSpecification: s.optional(s.lazy(() => slotDefaultValueSpecificationSchema)),
      slotConstraint: slotConstraintSchema,
      promptSpecification: s.optional(s.lazy(() => promptSpecificationSchema)),
      sampleUtterances: s.optional(s.array(s.lazy(() => sampleUtteranceSchema))),
      waitAndContinueSpecification: s.optional(s.lazy(() => waitAndContinueSpecificationSchema)),
      slotCaptureSetting: s.optional(s.lazy(() => slotCaptureSettingSchema)),
      slotResolutionSetting: s.optional(s.lazy(() => slotResolutionSettingSchema)),
    },
    { additionalProperties: s.json() },
  );
