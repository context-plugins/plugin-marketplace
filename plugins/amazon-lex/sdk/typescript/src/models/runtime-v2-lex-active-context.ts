import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  activeContextTimeToLiveSchema,
  type ActiveContextTimeToLive,
} from "./active-context-time-to-live.js";

export type RuntimeV2LexActiveContext = {
  /** The name of the context. */
  name: string;
  timeToLive: ActiveContextTimeToLive;
  /**
   * A list of contexts active for the request. A context can be activated when a previous intent is
   * fulfilled, or by including the context in the request. If you don't specify a list of contexts,
   * Amazon Lex V2 will use the current list of contexts for the session. If you specify an empty
   * list, all contexts for the session are cleared.
   */
  contextAttributes: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexActiveContextSchema: Schema<RuntimeV2LexActiveContext> =
  s.object<RuntimeV2LexActiveContext>(
    {
      name: s.string(),
      timeToLive: activeContextTimeToLiveSchema,
      contextAttributes: s.record(s.string(), s.string()),
    },
    { additionalProperties: s.json() },
  );
