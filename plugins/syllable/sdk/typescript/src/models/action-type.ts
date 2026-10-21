import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of action triggers, either "action", or "cta". */
export const ActionType = {
  Action: "action",
  Cta: "cta",
} as const;
export type ActionType = (typeof ActionType)[keyof typeof ActionType] | (string & {});

export const actionTypeSchema: EnumSchema<ActionType> = s.enumOf<ActionType>(ActionType);
