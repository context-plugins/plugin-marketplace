import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** When scheduled changes take effect. */
export const ChangeScheduledAt = {
  Now: "now",
  CycleEnd: "cycle_end",
} as const;
export type ChangeScheduledAt = (typeof ChangeScheduledAt)[keyof typeof ChangeScheduledAt] | (string & {});

export const changeScheduledAtSchema: EnumSchema<ChangeScheduledAt> =
  s.enumOf<ChangeScheduledAt>(ChangeScheduledAt);
