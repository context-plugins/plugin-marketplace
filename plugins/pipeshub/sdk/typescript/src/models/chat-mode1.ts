import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Execution mode. Scoped agent conversations support only `quick`. Required on the `/stream` route;
 * optional on the non-streaming route.
 */
export const ChatMode1 = {
  Quick: "quick",
} as const;
export type ChatMode1 = (typeof ChatMode1)[keyof typeof ChatMode1] | (string & {});

export const chatMode1Schema: EnumSchema<ChatMode1> = s.enumOf<ChatMode1>(ChatMode1);
