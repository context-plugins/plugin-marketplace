import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runtimeLexActiveContextSchema, type RuntimeLexActiveContext } from "./runtime-lex-active-context.js";
import { runtimeLexDialogActionSchema, type RuntimeLexDialogAction } from "./runtime-lex-dialog-action.js";
import { runtimeLexIntentSummarySchema, type RuntimeLexIntentSummary } from "./runtime-lex-intent-summary.js";

export type RuntimeLexGetSessionResponse = {
  /**
   * An array of information about the intents used in the session. The array can contain a maximum
   * of three summaries. If more than three intents are used in the session, the
   * recentIntentSummaryView operation contains information about the last three intents used. If
   * you set the checkpointLabelFilter parameter in the request, the array contains only the intents
   * with the specified label.
   */
  recentIntentSummaryView?: RuntimeLexIntentSummary[];
  /**
   * Map of key/value pairs representing the session-specific context information. It contains
   * application information passed between Amazon Lex and a client application.
   */
  sessionAttributes?: Record<string, string>;
  /** A unique identifier for the session. */
  sessionId?: string;
  dialogAction?: RuntimeLexDialogAction;
  /**
   * A list of active contexts for the session. A context can be set when an intent is fulfilled or
   * by calling the PostContent, PostText, or PutSession operation. You can use a context to control
   * the intents that can follow up an intent, or to modify the operation of your application.
   */
  activeContexts?: RuntimeLexActiveContext[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeLexGetSessionResponseSchema: Schema<RuntimeLexGetSessionResponse> =
  s.object<RuntimeLexGetSessionResponse>(
    {
      recentIntentSummaryView: s.optional(s.array(s.lazy(() => runtimeLexIntentSummarySchema))),
      sessionAttributes: s.optional(s.record(s.string(), s.string())),
      sessionId: s.optional(s.string()),
      dialogAction: s.optional(s.lazy(() => runtimeLexDialogActionSchema)),
      activeContexts: s.optional(s.array(s.lazy(() => runtimeLexActiveContextSchema))),
    },
    { additionalProperties: s.json() },
  );
