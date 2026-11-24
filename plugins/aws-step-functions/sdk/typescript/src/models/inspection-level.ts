import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines the values to return when a state is tested. You can specify one of the following
 * types: INFO: Shows the final state output. By default, Step Functions sets inspectionLevel to
 * INFO if you don't specify a level. DEBUG: Shows the final state output along with the input and
 * output data processing result. TRACE: Shows the HTTP request and response for an HTTP Task. This
 * level also shows the final state output along with the input and output data processing result.
 * Each of these levels also provide information about the status of the state execution and the
 * next state to transition to.
 */
export const InspectionLevel = {
  Info: "INFO",
  Debug: "DEBUG",
  Trace: "TRACE",
} as const;
export type InspectionLevel = (typeof InspectionLevel)[keyof typeof InspectionLevel] | (string & {});

export const inspectionLevelSchema: EnumSchema<InspectionLevel> = s.enumOf<InspectionLevel>(InspectionLevel);
