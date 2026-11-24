import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Bedrock trace status in the Bedrock model specification details. */
export const TraceStatus = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type TraceStatus = (typeof TraceStatus)[keyof typeof TraceStatus] | (string & {});

export const traceStatusSchema: EnumSchema<TraceStatus> = s.enumOf<TraceStatus>(TraceStatus);
