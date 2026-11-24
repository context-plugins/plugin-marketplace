import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status59 = {
  Draft: "DRAFT",
  Synced: "SYNCED",
  SyncFailed: "SYNC_FAILED",
  Disabled: "DISABLED",
} as const;
export type Status59 = (typeof Status59)[keyof typeof Status59] | (string & {});

export const status59Schema: EnumSchema<Status59> = s.enumOf<Status59>(Status59);
