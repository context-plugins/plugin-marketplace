import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the id in the incoming request. */
export const IdType = {
  ChannelName: "CHANNEL_NAME",
  ThreadId: "THREAD_ID",
  ConversationId: "CONVERSATION_ID",
} as const;
export type IdType = (typeof IdType)[keyof typeof IdType] | (string & {});

export const idTypeSchema: EnumSchema<IdType> = s.enumOf<IdType>(IdType);
