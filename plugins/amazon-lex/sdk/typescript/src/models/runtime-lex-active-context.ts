import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  runtimeLexActiveContextTimeToLiveSchema,
  type RuntimeLexActiveContextTimeToLive,
} from "./runtime-lex-active-context-time-to-live.js";

export type RuntimeLexActiveContext = {
  /** The name of the context. */
  name: string;
  timeToLive: RuntimeLexActiveContextTimeToLive;
  /**
   * State variables for the current context. You can use these values as default values for slots
   * in subsequent events.
   */
  parameters: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeLexActiveContextSchema: Schema<RuntimeLexActiveContext> =
  s.object<RuntimeLexActiveContext>(
    {
      name: s.string(),
      timeToLive: runtimeLexActiveContextTimeToLiveSchema,
      parameters: s.record(s.string(), s.string()),
    },
    { additionalProperties: s.json() },
  );
