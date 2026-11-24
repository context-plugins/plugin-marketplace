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

export type PutIntentRequest = {
  /**
   * The name of the intent. The name is not case sensitive. The name can't match a built-in intent
   * name, or a built-in intent name with "AMAZON." removed. For example, because there is a
   * built-in intent called AMAZON.HelpIntent, you can't create a custom intent called HelpIntent.
   * For a list of built-in intents, see Standard Built-in Intents in the Alexa Skills Kit.
   */
  name: string;
  /** A description of the intent. */
  description?: string;
  /**
   * An array of intent slots. At runtime, Amazon Lex elicits required slot values from the user
   * using prompts defined in the slots. For more information, see how-it-works.
   */
  slots?: ModelsLexSlot[];
  /**
   * An array of utterances (strings) that a user might say to signal the intent. For example, "I
   * want {PizzaSize} pizza", "Order {Quantity} {PizzaSize} pizzas". In each utterance, a slot name
   * is enclosed in curly braces.
   */
  sampleUtterances?: string[];
  confirmationPrompt?: Prompt;
  rejectionStatement?: Statement;
  followUpPrompt?: FollowUpPrompt;
  conclusionStatement?: Statement;
  dialogCodeHook?: CodeHook;
  fulfillmentActivity?: FulfillmentActivity;
  /**
   * A unique identifier for the built-in intent to base this intent on. To find the signature for
   * an intent, see Standard Built-in Intents in the Alexa Skills Kit.
   */
  parentIntentSignature?: string;
  /**
   * Identifies a specific revision of the $LATEST version. When you create a new intent, leave the
   * checksum field blank. If you specify a checksum you get a BadRequestException exception. When
   * you want to update a intent, set the checksum field to the checksum of the most recent revision
   * of the $LATEST version. If you don't specify the checksum field, or if the checksum does not
   * match the $LATEST version, you get a PreconditionFailedException exception.
   */
  checksum?: string;
  /**
   * When set to true a new numbered version of the intent is created. This is the same as calling
   * the CreateIntentVersion operation. If you do not specify createVersion, the default is false.
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

export const putIntentRequestSchema: Schema<PutIntentRequest> = s.object<PutIntentRequest>(
  {
    name: s.string(),
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
    checksum: s.optional(s.string()),
    createVersion: s.optional(s.boolean()),
    kendraConfiguration: s.optional(s.lazy(() => modelsLexKendraConfigurationSchema)),
    inputContexts: s.optional(s.array(s.lazy(() => inputContextSchema))),
    outputContexts: s.optional(s.array(s.lazy(() => modelsLexOutputContextSchema))),
  },
  { additionalProperties: s.json() },
);
