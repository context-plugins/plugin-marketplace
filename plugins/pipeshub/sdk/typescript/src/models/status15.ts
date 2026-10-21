import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status the connector is actually left in. */
export const Status15 = {
  Idle: "IDLE",
  Syncing: "SYNCING",
  FullSyncing: "FULL_SYNCING",
  Queued: "QUEUED",
  Deleting: "DELETING",
} as const;
export type Status15 = (typeof Status15)[keyof typeof Status15] | (string & {});

export const status15Schema: EnumSchema<Status15> = s.enumOf<Status15>(Status15);
