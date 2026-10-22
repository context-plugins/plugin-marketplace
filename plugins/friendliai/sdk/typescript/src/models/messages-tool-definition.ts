import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { description1Schema, type Description1 } from "./unions/description1.js";
import { inputSchemaSchema, type InputSchema } from "./unions/input-schema.js";
import { strictSchema, type Strict } from "./unions/strict.js";
import { type21Schema, type Type21 } from "./unions/type21.js";

export type MessagesToolDefinition = {
  /**
   * Tool identifier used in model tool-call outputs. Keep this name stable and unique within the
   * request.
   */
  name: string;
  /**
   * Tool category. If missing, empty, or `custom`, it is converted to a function tool. Any
   * non-empty value other than `custom` is treated as a server-side tool and skipped.
   */
  type?: Type21;
  /** Natural-language description of what the tool does and when to call it. */
  description?: Description1;
  /**
   * JSON Schema describing tool arguments. The model uses this schema to construct the tool input
   * object.
   */
  inputSchema?: InputSchema;
  /** If true, applies stricter schema adherence when generating tool arguments. */
  strict?: Strict;
};

export const messagesToolDefinitionSchema: Schema<MessagesToolDefinition> = s.object<MessagesToolDefinition>({
  name: s.string(),
  type: s.optional(s.lazy(() => type21Schema)),
  description: s.optional(s.lazy(() => description1Schema)),
  inputSchema: s.optional(s.lazy(() => inputSchemaSchema)),
  strict: s.optional(s.lazy(() => strictSchema)),
  _keysMap: {
    inputSchema: "input_schema",
  },
});
