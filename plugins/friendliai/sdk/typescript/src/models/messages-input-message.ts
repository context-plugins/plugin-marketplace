import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";
import { content5Schema, type Content5 } from "./unions/content5.js";

export type MessagesInputMessage = {
  /**
   * Author role for this message turn. Use `user` for user input and `assistant` for prior
   * assistant turns.
   */
  role: Role;
  /** Message payload. Supports plain string shorthand or a typed block array. */
  content: Content5;
};

export const messagesInputMessageSchema: Schema<MessagesInputMessage> = s.object<MessagesInputMessage>({
  role: roleSchema,
  content: content5Schema,
});
