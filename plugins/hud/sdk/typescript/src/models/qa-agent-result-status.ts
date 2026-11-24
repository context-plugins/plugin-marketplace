import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const QaAgentResultStatus = {
  Queued: "queued",
  Completed: "completed",
  Error: "error",
  Cancelled: "cancelled",
} as const;
export type QaAgentResultStatus =
  | (typeof QaAgentResultStatus)[keyof typeof QaAgentResultStatus]
  | (string & {});

export const qaAgentResultStatusSchema: EnumSchema<QaAgentResultStatus> =
  s.enumOf<QaAgentResultStatus>(QaAgentResultStatus);
