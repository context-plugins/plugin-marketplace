import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

export type PlatformChatInputMessage = {
  role: Role;
  content: string;
};

export const platformChatInputMessageSchema: Schema<PlatformChatInputMessage> =
  s.object<PlatformChatInputMessage>({
    role: roleSchema,
    content: s.string(),
  });
