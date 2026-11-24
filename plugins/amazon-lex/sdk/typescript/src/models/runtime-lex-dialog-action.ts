import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fulfillmentStateSchema, type FulfillmentState } from "./fulfillment-state.js";
import { messageFormatSchema, type MessageFormat } from "./message-format.js";
import { type2Schema, type Type2 } from "./type2.js";

export type RuntimeLexDialogAction = {
  /**
   * The next action that the bot should take in its interaction with the user. The possible values
   * are: ConfirmIntent - The next action is asking the user if the intent is complete and ready to
   * be fulfilled. This is a yes/no question such as "Place the order?" Close - Indicates that the
   * there will not be a response from the user. For example, the statement "Your order has been
   * placed" does not require a response. Delegate - The next action is determined by Amazon Lex.
   * ElicitIntent - The next action is to determine the intent that the user wants to fulfill.
   * ElicitSlot - The next action is to elicit
   */
  type: Type2;
  /** The name of the intent. */
  intentName?: string;
  /** Map of the slots that have been gathered and their values. */
  slots?: Record<string, string>;
  /** The name of the slot that should be elicited from the user. */
  slotToElicit?: string;
  /**
   * The fulfillment state of the intent. The possible values are: Failed - The Lambda function
   * associated with the intent failed to fulfill the intent. Fulfilled - The intent has fulfilled
   * by the Lambda function associated with the intent. ReadyForFulfillment - All of the information
   * necessary for the intent is present and the intent ready to be fulfilled by the client
   * application.
   */
  fulfillmentState?: FulfillmentState;
  /**
   * The message that should be shown to the user. If you don't specify a message, Amazon Lex will
   * use the message configured for the intent.
   */
  message?: string;
  /**
   * PlainText - The message contains plain UTF-8 text. CustomPayload - The message is a custom
   * format for the client. SSML - The message contains text formatted for voice output. Composite -
   * The message contains an escaped JSON object containing one or more messages. For more
   * information, see Message Groups.
   */
  messageFormat?: MessageFormat;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeLexDialogActionSchema: Schema<RuntimeLexDialogAction> = s.object<RuntimeLexDialogAction>(
  {
    type: type2Schema,
    intentName: s.optional(s.string()),
    slots: s.optional(s.record(s.string(), s.string())),
    slotToElicit: s.optional(s.string()),
    fulfillmentState: s.optional(s.lazy(() => fulfillmentStateSchema)),
    message: s.optional(s.string()),
    messageFormat: s.optional(s.lazy(() => messageFormatSchema)),
  },
  { additionalProperties: s.json() },
);
