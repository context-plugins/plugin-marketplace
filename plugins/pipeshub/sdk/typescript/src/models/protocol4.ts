import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * AG-UI is the only supported wire protocol. When present must be `"agui"`. Omitting the field is
 * equivalent — the server always uses the AG-UI vocabulary (see `AgentMessageStreamSSEEvent`). Kept
 * in the schema for backward compatibility with callers that already send it.
 */
export const Protocol4 = {
  Agui: "agui",
} as const;
export type Protocol4 = (typeof Protocol4)[keyof typeof Protocol4] | (string & {});

export const protocol4Schema: EnumSchema<Protocol4> = s.enumOf<Protocol4>(Protocol4);
