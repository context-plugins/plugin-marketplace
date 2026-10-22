import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusReasonTerminalResponse = {
  TerminalBusy: "terminal_busy",
  TerminalUnreachable: "terminal_unreachable",
} as const;
export type StatusReasonTerminalResponse =
  | (typeof StatusReasonTerminalResponse)[keyof typeof StatusReasonTerminalResponse]
  | (string & {});

export const statusReasonTerminalResponseSchema: EnumSchema<StatusReasonTerminalResponse> =
  s.enumOf<StatusReasonTerminalResponse>(StatusReasonTerminalResponse);
