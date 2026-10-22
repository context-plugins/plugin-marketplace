import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the last sync run ended */
export const LastSyncOutcome = {
  Succeeded: "succeeded",
  Failed: "failed",
  Stopped: "stopped",
  Skipped: "skipped",
} as const;
export type LastSyncOutcome = (typeof LastSyncOutcome)[keyof typeof LastSyncOutcome] | (string & {});

export const lastSyncOutcomeSchema: EnumSchema<LastSyncOutcome> = s.enumOf<LastSyncOutcome>(LastSyncOutcome);
