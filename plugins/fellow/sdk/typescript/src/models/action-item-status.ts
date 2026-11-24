import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ActionItemStatus = {
  Done: "Done",
  Archived: "Archived",
  Incomplete: "Incomplete",
} as const;
export type ActionItemStatus = (typeof ActionItemStatus)[keyof typeof ActionItemStatus] | (string & {});

export const actionItemStatusSchema: EnumSchema<ActionItemStatus> =
  s.enumOf<ActionItemStatus>(ActionItemStatus);
