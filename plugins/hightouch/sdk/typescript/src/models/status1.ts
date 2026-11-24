import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * "queueing": The identifiers are being queued for reprocessing. "queued": The identifiers have
 * been queued and added to the blocklist. Their associated clusters will be reprocessed next time
 * the graph runs. "reprocessed": The identifiers' clusters have been reprocessed during a run.
 * "failed": We failed to queue the identifiers for reprocessing. "cancelled": The reprocessing
 * request has been cancelled.
 */
export const Status1 = {
  Queueing: "queueing",
  Queued: "queued",
  Reprocessed: "reprocessed",
  Failed: "failed",
  Cancelled: "cancelled",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
