import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { content3Schema, type Content3 } from "./unions/content3.js";
import { name1Schema, type Name1 } from "./unions/name1.js";

export type UserMessage = {
  /** The role of the message's author. @default "user" */
  role?: "user";
  content: Content3;
  /** The name for the participant to distinguish between participants with the same role. */
  name?: Name1;
};

export const userMessageSchema: Schema<UserMessage> = s.object<UserMessage>({
  role: s.defaulted(s.literal("user"), "user"),
  content: content3Schema,
  name: s.optional(s.lazy(() => name1Schema)),
});
