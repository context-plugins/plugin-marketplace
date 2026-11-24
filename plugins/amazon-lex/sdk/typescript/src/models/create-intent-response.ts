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

export type CreateIntentResponse = {
  /** A unique identifier for the intent. */
  intentId?: string;
  /** The name specified for the intent. */
  intentName?: string;
  /** The display name specified for the intent. */
  intentDisplayName?: string;
  /** The description specified for the intent. */
  description?: string;
  /** The signature of the parent intent specified for the intent. */
  parentIntentSignature?: string;
  /** The sample utterances specified for the intent. */
  sampleUtterances?: SampleUtterance[];
  dialogCodeHook?: DialogCodeHookSettings;
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;
  intentConfirmationSetting?: IntentConfirmationSetting;
  intentClosingSetting?: IntentClosingSetting;
  /** The list of input contexts specified for the intent. */
  inputContexts?: InputContext[];
  /** The list of output contexts specified for the intent. */
  outputContexts?: OutputContext[];
  kendraConfiguration?: KendraConfiguration;
  /** The identifier of the bot associated with the intent. */
  botId?: string;
  /** The version of the bot associated with the intent. */
  botVersion?: string;
  /** The locale that the intent is specified to use. */
  localeId?: string;
  /** A timestamp of the date and time that the intent was created. */
  creationDateTime?: Date;
  initialResponseSetting?: InitialResponseSetting;
  qnAIntentConfiguration?: QnAIntentConfiguration;
  qInConnectIntentConfiguration?: QInConnectIntentConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createIntentResponseSchema: Schema<CreateIntentResponse> = s.object<CreateIntentResponse>(
  {
    intentId: s.optional(s.string()),
    intentName: s.optional(s.string()),
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
    botId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    localeId: s.optional(s.string()),
    creationDateTime: s.optional(s.dateTime()),
    initialResponseSetting: s.optional(s.lazy(() => initialResponseSettingSchema)),
    qnAIntentConfiguration: s.optional(s.lazy(() => qnAIntentConfigurationSchema)),
    qInConnectIntentConfiguration: s.optional(s.lazy(() => qInConnectIntentConfigurationSchema)),
  },
  { additionalProperties: s.json() },
);
