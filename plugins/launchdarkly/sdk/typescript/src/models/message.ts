import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Message = {
  content: string;
  role: string;
};

export const messageSchema: Schema<Message> = s.object<Message>({
  content: s.string(),
  role: s.string(),
});
