import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeHookSchema, type CodeHook } from "./code-hook.js";
import { followUpPromptSchema, type FollowUpPrompt } from "./follow-up-prompt.js";
import { fulfillmentActivitySchema, type FulfillmentActivity } from "./fulfillment-activity.js";
import { inputContextSchema, type InputContext } from "./input-context.js";
import {
  modelsLexKendraConfigurationSchema,
  type ModelsLexKendraConfiguration,
} from "./models-lex-kendra-configuration.js";
import { modelsLexOutputContextSchema, type ModelsLexOutputContext } from "./models-lex-output-context.js";
import { modelsLexSlotSchema, type ModelsLexSlot } from "./models-lex-slot.js";
import { promptSchema, type Prompt } from "./prompt.js";
import { statementSchema, type Statement } from "./statement.js";

export type CreateIntentVersionResponse = {
  /** The name of the intent. */
  name?: string;
  /** A description of the intent. */
  description?: string;
  /** An array of slot types that defines the information required to fulfill the intent. */
  slots?: ModelsLexSlot[];
  /** An array of sample utterances configured for the intent. */
  sampleUtterances?: string[];
  confirmationPrompt?: Prompt;
  rejectionStatement?: Statement;
  followUpPrompt?: FollowUpPrompt;
  conclusionStatement?: Statement;
  dialogCodeHook?: CodeHook;
  fulfillmentActivity?: FulfillmentActivity;
  /** A unique identifier for a built-in intent. */
  parentIntentSignature?: string;
  /** The date that the intent was updated. */
  lastUpdatedDate?: Date;
  /** The date that the intent was created. */
  createdDate?: Date;
  /** The version number assigned to the new version of the intent. */
  version?: string;
  /** Checksum of the intent version created. */
  checksum?: string;
  kendraConfiguration?: ModelsLexKendraConfiguration;
  /**
   * An array of InputContext objects that lists the contexts that must be active for Amazon Lex to
   * choose the intent in a conversation with the user.
   */
  inputContexts?: InputContext[];
  /**
   * An array of OutputContext objects that lists the contexts that the intent activates when the
   * intent is fulfilled.
   */
  outputContexts?: ModelsLexOutputContext[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createIntentVersionResponseSchema: Schema<CreateIntentVersionResponse> =
  s.object<CreateIntentVersionResponse>(
    {
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      slots: s.optional(s.array(s.lazy(() => modelsLexSlotSchema))),
      sampleUtterances: s.optional(s.array(s.string())),
      confirmationPrompt: s.optional(s.lazy(() => promptSchema)),
      rejectionStatement: s.optional(s.lazy(() => statementSchema)),
      followUpPrompt: s.optional(s.lazy(() => followUpPromptSchema)),
      conclusionStatement: s.optional(s.lazy(() => statementSchema)),
      dialogCodeHook: s.optional(s.lazy(() => codeHookSchema)),
      fulfillmentActivity: s.optional(s.lazy(() => fulfillmentActivitySchema)),
      parentIntentSignature: s.optional(s.string()),
      lastUpdatedDate: s.optional(s.dateTime()),
      createdDate: s.optional(s.dateTime()),
      version: s.optional(s.string()),
      checksum: s.optional(s.string()),
      kendraConfiguration: s.optional(s.lazy(() => modelsLexKendraConfigurationSchema)),
      inputContexts: s.optional(s.array(s.lazy(() => inputContextSchema))),
      outputContexts: s.optional(s.array(s.lazy(() => modelsLexOutputContextSchema))),
    },
    { additionalProperties: s.json() },
  );
