import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dialogState1Schema, type DialogState1 } from "./dialog-state1.js";
import { messageFormat1Schema, type MessageFormat1 } from "./message-format1.js";

export type RuntimeLexPutSessionResponse = {
  /** Content type as specified in the Accept HTTP header in the request. */
  contentType?: string;
  /** The name of the current intent. */
  intentName?: string;
  /**
   * Map of zero or more intent slots Amazon Lex detected from the user input during the
   * conversation. Amazon Lex creates a resolution list containing likely values for a slot. The
   * value that it returns is determined by the valueSelectionStrategy selected when the slot type
   * was created or updated. If valueSelectionStrategy is set to ORIGINAL_VALUE, the value provided
   * by the user is returned, if the user value is similar to the slot values. If
   * valueSelectionStrategy is set to TOP_RESOLUTION Amazon Lex returns the first value in the
   * resolution list or, if there is no resolution list, null. If you don
   */
  slots?: string;
  /** Map of key/value pairs representing session-specific context information. */
  sessionAttributes?: string;
  /**
   * The next message that should be presented to the user. You can only use this field in the
   * de-DE, en-AU, en-GB, en-US, es-419, es-ES, es-US, fr-CA, fr-FR, and it-IT locales. In all other
   * locales, the message field is null. You should use the encodedMessage field instead.
   */
  message?: string;
  /**
   * The next message that should be presented to the user. The encodedMessage field is base-64
   * encoded. You must decode the field before you can use the value.
   */
  encodedMessage?: string;
  /**
   * The format of the response message. One of the following values: PlainText - The message
   * contains plain UTF-8 text. CustomPayload - The message is a custom format for the client. SSML
   * - The message contains text formatted for voice output. Composite - The message contains an
   * escaped JSON object containing one or more messages from the groups that messages were assigned
   * to when the intent was created.
   */
  messageFormat?: MessageFormat1;
  /**
   * ConfirmIntent - Amazon Lex is expecting a "yes" or "no" response to confirm the intent before
   * fulfilling an intent. ElicitIntent - Amazon Lex wants to elicit the user's intent. ElicitSlot -
   * Amazon Lex is expecting the value of a slot for the current intent. Failed - Conveys that the
   * conversation with the user has failed. This can happen for various reasons, including the user
   * does not provide an appropriate response to prompts from the service, or if the Lambda function
   * fails to fulfill the intent. Fulfilled - Conveys that the Lambda function has sucessfully
   * fulfilled the intent. ReadyForFulfi
   */
  dialogState?: DialogState1;
  /**
   * If the dialogState is ElicitSlot, returns the name of the slot for which Amazon Lex is
   * eliciting a value.
   */
  slotToElicit?: string;
  /** The audio version of the message to convey to the user. */
  audioStream?: string;
  /** A unique identifier for the session. */
  sessionId?: string;
  /** A list of active contexts for the session. */
  activeContexts?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeLexPutSessionResponseSchema: Schema<RuntimeLexPutSessionResponse> =
  s.object<RuntimeLexPutSessionResponse>(
    {
      contentType: s.optional(s.string()),
      intentName: s.optional(s.string()),
      slots: s.optional(s.string()),
      sessionAttributes: s.optional(s.string()),
      message: s.optional(s.string()),
      encodedMessage: s.optional(s.string()),
      messageFormat: s.optional(s.lazy(() => messageFormat1Schema)),
      dialogState: s.optional(s.lazy(() => dialogState1Schema)),
      slotToElicit: s.optional(s.string()),
      audioStream: s.optional(s.string()),
      sessionId: s.optional(s.string()),
      activeContexts: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
