import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * AG-UI is the only supported wire protocol. When present must be `"agui"`. Omitting the field is
 * equivalent — the server always uses the AG-UI vocabulary (`RUN_STARTED`, `TEXT_MESSAGE_CONTENT`,
 * etc.). Kept in the schema for backward compatibility with callers that already send it.
 */
export const Protocol = {
  Agui: "agui",
} as const;
export type Protocol = (typeof Protocol)[keyof typeof Protocol] | (string & {});

export const protocolSchema: EnumSchema<Protocol> = s.enumOf<Protocol>(Protocol);
