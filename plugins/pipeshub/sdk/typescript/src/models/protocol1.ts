import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * AG-UI is the only supported wire protocol. When present must be `"agui"`. Omitting the field is
 * equivalent — the server always uses the AG-UI vocabulary (see `AgentStreamSSEEvent`). Kept in the
 * schema for backward compatibility with callers that already send it.
 */
export const Protocol1 = {
  Agui: "agui",
} as const;
export type Protocol1 = (typeof Protocol1)[keyof typeof Protocol1] | (string & {});

export const protocol1Schema: EnumSchema<Protocol1> = s.enumOf<Protocol1>(Protocol1);
