import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the terminal. */
export const TerminalStatus = {
  Pending: "pending",
  Active: "active",
  Inactive: "inactive",
} as const;
export type TerminalStatus = (typeof TerminalStatus)[keyof typeof TerminalStatus] | (string & {});

export const terminalStatusSchema: EnumSchema<TerminalStatus> = s.enumOf<TerminalStatus>(TerminalStatus);
