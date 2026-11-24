import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The last execution state of the curation. */
export const LastExecutionState = {
  LastExecutionStateUnspecified: "LAST_EXECUTION_STATE_UNSPECIFIED",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type LastExecutionState = (typeof LastExecutionState)[keyof typeof LastExecutionState] | (string & {});

export const lastExecutionStateSchema: EnumSchema<LastExecutionState> =
  s.enumOf<LastExecutionState>(LastExecutionState);
