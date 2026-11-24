import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status39 = {
  Synced: "SYNCED",
  SyncFailed: "SYNC_FAILED",
  Unsupported: "UNSUPPORTED",
} as const;
export type Status39 = (typeof Status39)[keyof typeof Status39] | (string & {});

export const status39Schema: EnumSchema<Status39> = s.enumOf<Status39>(Status39);
