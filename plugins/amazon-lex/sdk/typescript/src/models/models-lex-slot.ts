import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  obfuscationSettingAmazonLexModelBuildingV2VersionsApiSchema,
  type ObfuscationSettingAmazonLexModelBuildingV2VersionsApi,
} from "./obfuscation-setting-amazon-lex-model-building-v2-versions-api.js";
import { promptSchema, type Prompt } from "./prompt.js";
import { slotConstraintSchema, type SlotConstraint } from "./slot-constraint.js";
import { slotDefaultValueSpecSchema, type SlotDefaultValueSpec } from "./slot-default-value-spec.js";

export type ModelsLexSlot = {
  /** The name of the slot. */
  name: string;
  /** A description of the slot. */
  description?: string;
  /** Specifies whether the slot is required or optional. */
  slotConstraint: SlotConstraint;
  /**
   * The type of the slot, either a custom slot type that you defined or one of the built-in slot
   * types.
   */
  slotType?: string;
  /** The version of the slot type. */
  slotTypeVersion?: string;
  valueElicitationPrompt?: Prompt;
  /**
   * Directs Amazon Lex the order in which to elicit this slot value from the user. For example, if
   * the intent has two slots with priorities 1 and 2, AWS Amazon Lex first elicits a value for the
   * slot with priority 1. If multiple slots share the same priority, the order in which Amazon Lex
   * elicits values is arbitrary.
   */
  priority?: number;
  /**
   * If you know a specific pattern with which users might respond to an Amazon Lex request for a
   * slot value, you can provide those utterances to improve accuracy. This is optional. In most
   * cases, Amazon Lex is capable of understanding user utterances.
   */
  sampleUtterances?: string[];
  /**
   * A set of possible responses for the slot type used by text-based clients. A user chooses an
   * option from the response card, instead of using text to reply.
   */
  responseCard?: string;
  /**
   * Determines whether a slot is obfuscated in conversation logs and stored utterances. When you
   * obfuscate a slot, the value is replaced by the slot name in curly braces ({}). For example, if
   * the slot name is "full_name", obfuscated values are replaced with "{full_name}". For more
   * information, see Slot Obfuscation .
   */
  obfuscationSetting?: ObfuscationSettingAmazonLexModelBuildingV2VersionsApi;
  defaultValueSpec?: SlotDefaultValueSpec;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexSlotSchema: Schema<ModelsLexSlot> = s.object<ModelsLexSlot>(
  {
    name: s.string(),
    description: s.optional(s.string()),
    slotConstraint: slotConstraintSchema,
    slotType: s.optional(s.string()),
    slotTypeVersion: s.optional(s.string()),
    valueElicitationPrompt: s.optional(s.lazy(() => promptSchema)),
    priority: s.optional(s.int()),
    sampleUtterances: s.optional(s.array(s.string())),
    responseCard: s.optional(s.string()),
    obfuscationSetting: s.optional(s.lazy(() => obfuscationSettingAmazonLexModelBuildingV2VersionsApiSchema)),
    defaultValueSpec: s.optional(s.lazy(() => slotDefaultValueSpecSchema)),
  },
  { additionalProperties: s.json() },
);
