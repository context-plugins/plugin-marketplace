import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of change to make to the context's removal date from this segment */
export const Kind18 = {
  AddExpiringTarget: "addExpiringTarget",
  UpdateExpiringTarget: "updateExpiringTarget",
  RemoveExpiringTarget: "removeExpiringTarget",
} as const;
export type Kind18 = (typeof Kind18)[keyof typeof Kind18] | (string & {});

export const kind18Schema: EnumSchema<Kind18> = s.enumOf<Kind18>(Kind18);
