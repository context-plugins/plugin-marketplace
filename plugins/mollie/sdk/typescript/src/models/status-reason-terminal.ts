import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusReasonTerminal = {
  TerminalBusy: "terminal_busy",
  TerminalUnreachable: "terminal_unreachable",
} as const;
export type StatusReasonTerminal =
  | (typeof StatusReasonTerminal)[keyof typeof StatusReasonTerminal]
  | (string & {});

export const statusReasonTerminalSchema: EnumSchema<StatusReasonTerminal> =
  s.enumOf<StatusReasonTerminal>(StatusReasonTerminal);
