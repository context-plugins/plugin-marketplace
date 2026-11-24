import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dialogActionSchema, type DialogAction } from "./dialog-action.js";
import { intentOverrideSchema, type IntentOverride } from "./intent-override.js";

export type DialogState = {
  dialogAction?: DialogAction;
  intent?: IntentOverride;
  /**
   * Map of key/value pairs representing session-specific context information. It contains
   * application information passed between Amazon Lex and a client application.
   */
  sessionAttributes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dialogStateSchema: Schema<DialogState> = s.object<DialogState>(
  {
    dialogAction: s.optional(s.lazy(() => dialogActionSchema)),
    intent: s.optional(s.lazy(() => intentOverrideSchema)),
    sessionAttributes: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
