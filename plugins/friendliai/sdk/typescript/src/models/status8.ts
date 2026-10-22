import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the current execution status of the tool. */
export const Status8 = {
  Started: "STARTED",
  Updating: "UPDATING",
  Ended: "ENDED",
  Errored: "ERRORED",
} as const;
export type Status8 = (typeof Status8)[keyof typeof Status8] | (string & {});

export const status8Schema: EnumSchema<Status8> = s.enumOf<Status8>(Status8);
