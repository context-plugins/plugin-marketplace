import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatStreamProgressSchema,
  type PlatformChatStreamProgress,
} from "./platform-chat-stream-progress.js";

export type PlatformChatStreamProgressServerSentEvent = {
  id?: string;
  /** @default "RESPONSE_PROGRESS" */
  event?: "RESPONSE_PROGRESS";
  data: PlatformChatStreamProgress;
};

export const platformChatStreamProgressServerSentEventSchema: Schema<PlatformChatStreamProgressServerSentEvent> =
  s.object<PlatformChatStreamProgressServerSentEvent>({
    id: s.optional(s.string()),
    event: s.defaulted(s.literal("RESPONSE_PROGRESS"), "RESPONSE_PROGRESS"),
    data: platformChatStreamProgressSchema,
  });
