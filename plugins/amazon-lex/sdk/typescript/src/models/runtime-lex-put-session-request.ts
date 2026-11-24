import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runtimeLexActiveContextSchema, type RuntimeLexActiveContext } from "./runtime-lex-active-context.js";
import { runtimeLexDialogActionSchema, type RuntimeLexDialogAction } from "./runtime-lex-dialog-action.js";
import { runtimeLexIntentSummarySchema, type RuntimeLexIntentSummary } from "./runtime-lex-intent-summary.js";

export type RuntimeLexPutSessionRequest = {
  /** The name of the bot that contains the session data. */
  botName: string;
  /** The alias in use for the bot that contains the session data. */
  botAlias: string;
  /**
   * The ID of the client application user. Amazon Lex uses this to identify a user's conversation
   * with your bot.
   */
  userId: string;
  /**
   * Map of key/value pairs representing the session-specific context information. It contains
   * application information passed between Amazon Lex and a client application.
   */
  sessionAttributes?: Record<string, string>;
  dialogAction?: RuntimeLexDialogAction;
  /**
   * A summary of the recent intents for the bot. You can use the intent summary view to set a
   * checkpoint label on an intent and modify attributes of intents. You can also use it to remove
   * or add intent summary objects to the list. An intent that you modify or add to the list must
   * make sense for the bot. For example, the intent name must be valid for the bot. You must
   * provide valid values for: intentName slot names slotToElict If you send the
   * recentIntentSummaryView parameter in a PutSession request, the contents of the new summary view
   * replaces the old summary view. For example, if a GetSession re
   */
  recentIntentSummaryView?: RuntimeLexIntentSummary[];
  /**
   * The message that Amazon Lex returns in the response can be either text or speech based
   * depending on the value of this field. If the value is text/plain; charset=utf-8, Amazon Lex
   * returns text in the response. If the value begins with audio/, Amazon Lex returns speech in the
   * response. Amazon Lex uses Amazon Polly to generate the speech in the configuration that you
   * specify. For example, if you specify audio/mpeg as the value, Amazon Lex returns speech in the
   * MPEG format. If the value is audio/pcm, the speech is returned as audio/pcm in 16-bit, little
   * endian format. The following are the accepte
   */
  accept?: string;
  /**
   * A list of contexts active for the request. A context can be activated when a previous intent is
   * fulfilled, or by including the context in the request, If you don't specify a list of contexts,
   * Amazon Lex will use the current list of contexts for the session. If you specify an empty list,
   * all contexts for the session are cleared.
   */
  activeContexts?: RuntimeLexActiveContext[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeLexPutSessionRequestSchema: Schema<RuntimeLexPutSessionRequest> =
  s.object<RuntimeLexPutSessionRequest>(
    {
      botName: s.string(),
      botAlias: s.string(),
      userId: s.string(),
      sessionAttributes: s.optional(s.record(s.string(), s.string())),
      dialogAction: s.optional(s.lazy(() => runtimeLexDialogActionSchema)),
      recentIntentSummaryView: s.optional(s.array(s.lazy(() => runtimeLexIntentSummarySchema))),
      accept: s.optional(s.string()),
      activeContexts: s.optional(s.array(s.lazy(() => runtimeLexActiveContextSchema))),
    },
    { additionalProperties: s.json() },
  );
