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

export type CreateIntentRequest = {
  /**
   * The name of the intent. Intent names must be unique in the locale that contains the intent and
   * cannot match the name of any built-in intent.
   */
  intentName: string;
  /**
   * A display name for the intent. If configured, This name will be shown to users during Intent
   * Disambiguation instead of the intent name. Display names should be user-friendly, descriptive
   * and match the intent's purpose to improve user experience during disambiguation.
   */
  intentDisplayName?: string;
  /** A description of the intent. Use the description to help identify the intent in lists. */
  description?: string;
  /** A unique identifier for the built-in intent to base this intent on. */
  parentIntentSignature?: string;
  /**
   * An array of strings that a user might say to signal the intent. For example, "I want a pizza",
   * or "I want a {PizzaSize} pizza". In an utterance, slot names are enclosed in curly braces ("{",
   * "}") to indicate where they should be displayed in the utterance shown to the user..
   */
  sampleUtterances?: SampleUtterance[];
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  /**
   * A list of contexts that must be active for this intent to be considered by Amazon Lex. When an
   * intent has an input context list, Amazon Lex only considers using the intent in an interaction
   * with the user when the specified contexts are included in the active context list for the
   * session. If the contexts are not active, then Amazon Lex will not use the intent. A context can
   * be automatically activated using the outputContexts property or it can be set at runtime. For
   * example, if there are two intents with different input contexts that respond to the same
   * utterances, only the intent with the acti
   */
  inputContexts?: InputContext[];
  /**
   * A lists of contexts that the intent activates when it is fulfilled. You can use an output
   * context to indicate the intents that Amazon Lex should consider for the next turn of the
   * conversation with a customer. When you use the outputContextsList property, all of the contexts
   * specified in the list are activated when the intent is fulfilled. You can set up to 10 output
   * contexts. You can also set the number of conversation turns that the context should be active,
   * or the length of time that the context should be active.
   */
  outputContexts?: OutputContext[];
  kendraConfiguration?: KendraConfiguration;
  /** The identifier of the bot associated with this intent. */
  botId: string;
  /** The version of the bot associated with this intent. */
  botVersion: string;
  /**
   * The identifier of the language and locale where this intent is used. All of the bots, slot
   * types, and slots used by the intent must have the same locale. For more information, see
   * Supported languages.
   */
  localeId: string;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createIntentRequestSchema: Schema<CreateIntentRequest> = s.object<CreateIntentRequest>(
  {
    intentName: s.string(),
    intentDisplayName: s.optional(s.string()),
    description: s.optional(s.string()),
    parentIntentSignature: s.optional(s.string()),
    sampleUtterances: s.optional(s.array(s.lazy(() => sampleUtteranceSchema))),
    dialogCodeHook: s.optional(s.lazy(() => dialogCodeHookSettingsSchema)),
    fulfillmentCodeHook: s.optional(s.lazy(() => fulfillmentCodeHookSettingsSchema)),
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
