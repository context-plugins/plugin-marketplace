import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dialogCodeHookSettingsSchema, type DialogCodeHookSettings } from "./dialog-code-hook-settings.js";
import {
  fulfillmentCodeHookSettingsSchema,
  type FulfillmentCodeHookSettings,
} from "./fulfillment-code-hook-settings.js";
import { initialResponseSettingSchema, type InitialResponseSetting } from "./initial-response-setting.js";
import { inputContextSchema, type InputContext } from "./input-context.js";
import { intentClosingSettingSchema, type IntentClosingSetting } from "./intent-closing-setting.js";
import {
  intentConfirmationSettingSchema,
  type IntentConfirmationSetting,
} from "./intent-confirmation-setting.js";
import { kendraConfigurationSchema, type KendraConfiguration } from "./kendra-configuration.js";
import { outputContextSchema, type OutputContext } from "./output-context.js";
import {
  qInConnectIntentConfigurationSchema,
  type QInConnectIntentConfiguration,
} from "./qin-connect-intent-configuration.js";
import { qnAIntentConfigurationSchema, type QnAIntentConfiguration } from "./qn-aintent-configuration.js";
import { sampleUtteranceSchema, type SampleUtterance } from "./sample-utterance.js";
import { slotPrioritySchema, type SlotPriority } from "./slot-priority.js";

export type UpdateIntentRequest = {
  /** The unique identifier of the intent to update. */
  intentId: string;
  /** The new name for the intent. */
  intentName: string;
  /** The new display name for the intent. */
  intentDisplayName?: string;
  /** The new description of the intent. */
  description?: string;
  /** The signature of the new built-in intent to use as the parent of this intent. */
  parentIntentSignature?: string;
  /** New utterances used to invoke the intent. */
  sampleUtterances?: SampleUtterance[];
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  /** A new list of slots and their priorities that are contained by the intent. */
  slotPriorities?: SlotPriority[];
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  /** A new list of contexts that must be active in order for Amazon Lex to consider the intent. */
  inputContexts?: InputContext[];
  /** A new list of contexts that Amazon Lex activates when the intent is fulfilled. */
  outputContexts?: OutputContext[];
  kendraConfiguration?: KendraConfiguration;
  /** The identifier of the bot that contains the intent. */
  botId: string;
  /** The version of the bot that contains the intent. Must be DRAFT. */
  botVersion: string;
  /**
   * The identifier of the language and locale where this intent is used. The string must match one
   * of the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateIntentRequestSchema: Schema<UpdateIntentRequest> = s.object<UpdateIntentRequest>(
  {
    intentId: s.string(),
    intentName: s.string(),
    intentDisplayName: s.optional(s.string()),
    description: s.optional(s.string()),
    parentIntentSignature: s.optional(s.string()),
    sampleUtterances: s.optional(s.array(s.lazy(() => sampleUtteranceSchema))),
    dialogCodeHook: s.optional(s.lazy(() => dialogCodeHookSettingsSchema)),
    fulfillmentCodeHook: s.optional(s.lazy(() => fulfillmentCodeHookSettingsSchema)),
    slotPriorities: s.optional(s.array(s.lazy(() => slotPrioritySchema))),
    intentConfirmationSetting: s.optional(s.lazy(() => intentConfirmationSettingSchema)),
    intentClosingSetting: s.optional(s.lazy(() => intentClosingSettingSchema)),
    inputContexts: s.optional(s.array(s.lazy(() => inputContextSchema))),
    outputContexts: s.optional(s.array(s.lazy(() => outputContextSchema))),
    kendraConfiguration: s.optional(s.lazy(() => kendraConfigurationSchema)),
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
    initialResponseSetting: s.optional(s.lazy(() => initialResponseSettingSchema)),
    qnAIntentConfiguration: s.optional(s.lazy(() => qnAIntentConfigurationSchema)),
    qInConnectIntentConfiguration: s.optional(s.lazy(() => qInConnectIntentConfigurationSchema)),
  },
  { additionalProperties: s.json() },
);
