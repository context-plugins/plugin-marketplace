import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * AG-UI is the only supported wire protocol. When present must be `"agui"`. Omitting the field is
 * equivalent — the server always uses the AG-UI vocabulary (see
 * `ConversationMessageStreamSSEEvent`). Kept in the schema for backward compatibility with callers
 * that already send it.
 */
export const Protocol3 = {
  Agui: "agui",
} as const;
export type Protocol3 = (typeof Protocol3)[keyof typeof Protocol3] | (string & {});

export const protocol3Schema: EnumSchema<Protocol3> = s.enumOf<Protocol3>(Protocol3);
