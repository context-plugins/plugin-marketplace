import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * AG-UI is the only supported wire protocol. When present must be `"agui"`. Omitting the field is
 * equivalent — the server always uses the AG-UI vocabulary. Kept in the schema for backward
 * compatibility with callers that already send it.
 */
export const Protocol2 = {
  Agui: "agui",
} as const;
export type Protocol2 = (typeof Protocol2)[keyof typeof Protocol2] | (string & {});

export const protocol2Schema: EnumSchema<Protocol2> = s.enumOf<Protocol2>(Protocol2);
