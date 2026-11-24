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

export type PutIntentResponse = {
  /** The name of the intent. */
  name?: string;
  /** A description of the intent. */
  description?: string;
  /** An array of intent slots that are configured for the intent. */
  slots?: ModelsLexSlot[];
  /** An array of sample utterances that are configured for the intent. */
  sampleUtterances?: string[];
  confirmationPrompt?: Prompt;
  rejectionStatement?: Statement;
  followUpPrompt?: FollowUpPrompt;
  conclusionStatement?: Statement;
  dialogCodeHook?: CodeHook;
  fulfillmentActivity?: FulfillmentActivity;
  /** A unique identifier for the built-in intent that this intent is based on. */
  parentIntentSignature?: string;
  /**
   * The date that the intent was updated. When you create a resource, the creation date and last
   * update dates are the same.
   */
  lastUpdatedDate?: Date;
  /** The date that the intent was created. */
  createdDate?: Date;
  /** The version of the intent. For a new intent, the version is always $LATEST. */
  version?: string;
  /** Checksum of the $LATESTversion of the intent created or updated. */
  checksum?: string;
  /**
   * True if a new version of the intent was created. If the createVersion field was not specified
   * in the request, the createVersion field is set to false in the response.
   */
  createVersion?: boolean;
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

export const putIntentResponseSchema: Schema<PutIntentResponse> = s.object<PutIntentResponse>(
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
    createVersion: s.optional(s.boolean()),
    kendraConfiguration: s.optional(s.lazy(() => modelsLexKendraConfigurationSchema)),
    inputContexts: s.optional(s.array(s.lazy(() => inputContextSchema))),
    outputContexts: s.optional(s.array(s.lazy(() => modelsLexOutputContextSchema))),
  },
  { additionalProperties: s.json() },
);
