import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageType2Schema, type MessageType2 } from "./message-type2.js";

export type MessageFilters1 = {
  messageType?: MessageType2;
};

export const messageFilters1Schema: Schema<MessageFilters1> = s.object<MessageFilters1>({
  messageType: s.optional(s.lazy(() => messageType2Schema)),
});
