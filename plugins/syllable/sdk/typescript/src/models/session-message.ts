import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dialogMessage1Schema, type DialogMessage1 } from "./dialog-message1.js";
import { dialogRole1Schema, type DialogRole1 } from "./dialog-role1.js";
import { dialogToolCallSchema, type DialogToolCall } from "./dialog-tool-call.js";

export type SessionMessage = {
  /** Dialog role */
  role: DialogRole1;
  /** Dialog message */
  dialog: DialogMessage1;
  /** Tool calls */
  toolCalls: DialogToolCall[];
  /** Message timestamp */
  timestamp: Date;
};

export const sessionMessageSchema: Schema<SessionMessage> = s.object<SessionMessage>({
  role: dialogRole1Schema,
  dialog: dialogMessage1Schema,
  toolCalls: s.array(s.lazy(() => dialogToolCallSchema)),
  timestamp: s.dateTime(),
  _keysMap: {
    toolCalls: "tool_calls",
  },
});
