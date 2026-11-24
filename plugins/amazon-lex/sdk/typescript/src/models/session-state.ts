import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intentSchema, type Intent } from "./intent.js";
import { runtimeHintsSchema, type RuntimeHints } from "./runtime-hints.js";
import {
  runtimeV2LexActiveContextSchema,
  type RuntimeV2LexActiveContext,
} from "./runtime-v2-lex-active-context.js";
import {
  runtimeV2LexDialogActionSchema,
  type RuntimeV2LexDialogAction,
} from "./runtime-v2-lex-dialog-action.js";

export type SessionState = {
  dialogAction?: RuntimeV2LexDialogAction;
  intent?: Intent;
  /**
   * One or more contexts that indicate to Amazon Lex V2 the context of a request. When a context is
   * active, Amazon Lex V2 considers intents with the matching context as a trigger as the next
   * intent in a session.
   */
  activeContexts?: RuntimeV2LexActiveContext[];
  /**
   * Map of key/value pairs representing session-specific context information. It contains
   * application information passed between Amazon Lex V2 and a client application.
   */
  sessionAttributes?: Record<string, string>;
  /** A unique identifier for a specific request. */
  originatingRequestId?: string;
  runtimeHints?: RuntimeHints;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionStateSchema: Schema<SessionState> = s.object<SessionState>(
  {
    dialogAction: s.optional(s.lazy(() => runtimeV2LexDialogActionSchema)),
    intent: s.optional(s.lazy(() => intentSchema)),
    activeContexts: s.optional(s.array(s.lazy(() => runtimeV2LexActiveContextSchema))),
    sessionAttributes: s.optional(s.record(s.string(), s.string())),
    originatingRequestId: s.optional(s.string()),
    runtimeHints: s.optional(s.lazy(() => runtimeHintsSchema)),
  },
  { additionalProperties: s.json() },
);
