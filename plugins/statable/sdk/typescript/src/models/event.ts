import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Event = {
  Created: "created",
  Rotated: "rotated",
  Revoked: "revoked",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);
