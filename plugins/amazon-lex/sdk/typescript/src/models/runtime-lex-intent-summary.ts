import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { confirmationStatusSchema, type ConfirmationStatus } from "./confirmation-status.js";
import { dialogActionTypeSchema, type DialogActionType } from "./dialog-action-type.js";
import { fulfillmentStateSchema, type FulfillmentState } from "./fulfillment-state.js";

export type RuntimeLexIntentSummary = {
  /** The name of the intent. */
  intentName?: string;
  /**
   * A user-defined label that identifies a particular intent. You can use this label to return to a
   * previous intent. Use the checkpointLabelFilter parameter of the GetSessionRequest operation to
   * filter the intents returned by the operation to those with only the specified label.
   */
  checkpointLabel?: string;
  /** Map of the slots that have been gathered and their values. */
  slots?: Record<string, string>;
  /**
   * The status of the intent after the user responds to the confirmation prompt. If the user
   * confirms the intent, Amazon Lex sets this field to Confirmed. If the user denies the intent,
   * Amazon Lex sets this value to Denied. The possible values are: Confirmed - The user has
   * responded "Yes" to the confirmation prompt, confirming that the intent is complete and that it
   * is ready to be fulfilled. Denied - The user has responded "No" to the confirmation prompt. None
   * - The user has never been prompted for confirmation; or, the user was prompted but did not
   * confirm or deny the prompt.
   */
  confirmationStatus?: ConfirmationStatus;
  /**
   * The next action that the bot should take in its interaction with the user. The possible values
   * are: ConfirmIntent - The next action is asking the user if the intent is complete and ready to
   * be fulfilled. This is a yes/no question such as "Place the order?" Close - Indicates that the
   * there will not be a response from the user. For example, the statement "Your order has been
   * placed" does not require a response. ElicitIntent - The next action is to determine the intent
   * that the user wants to fulfill. ElicitSlot - The next action is to elicit a slot value from the
   * user.
   */
  dialogActionType: DialogActionType;
  /**
   * The fulfillment state of the intent. The possible values are: Failed - The Lambda function
   * associated with the intent failed to fulfill the intent. Fulfilled - The intent has fulfilled
   * by the Lambda function associated with the intent. ReadyForFulfillment - All of the information
   * necessary for the intent is present and the intent ready to be fulfilled by the client
   * application.
   */
  fulfillmentState?: FulfillmentState;
  /** The next slot to elicit from the user. If there is not slot to elicit, the field is blank. */
  slotToElicit?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeLexIntentSummarySchema: Schema<RuntimeLexIntentSummary> =
  s.object<RuntimeLexIntentSummary>(
    {
      intentName: s.optional(s.string()),
      checkpointLabel: s.optional(s.string()),
      slots: s.optional(s.record(s.string(), s.string())),
      confirmationStatus: s.optional(s.lazy(() => confirmationStatusSchema)),
      dialogActionType: dialogActionTypeSchema,
      fulfillmentState: s.optional(s.lazy(() => fulfillmentStateSchema)),
      slotToElicit: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
