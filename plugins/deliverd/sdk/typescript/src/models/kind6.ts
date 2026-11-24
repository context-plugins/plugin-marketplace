import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** side_task, investigation, research, debug or decision; side_task when omitted */
export const Kind6 = {
  SideTask: "side_task",
  Investigation: "investigation",
  Research: "research",
  Debug: "debug",
  Decision: "decision",
} as const;
export type Kind6 = (typeof Kind6)[keyof typeof Kind6] | (string & {});

export const kind6Schema: EnumSchema<Kind6> = s.enumOf<Kind6>(Kind6);
