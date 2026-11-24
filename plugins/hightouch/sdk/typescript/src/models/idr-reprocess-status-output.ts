import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type IdrReprocessStatusOutput = {
  /**
   * "queueing": The identifiers are being queued for reprocessing. "queued": The identifiers have
   * been queued and added to the blocklist. Their associated clusters will be reprocessed next time
   * the graph runs. "reprocessed": The identifiers' clusters have been reprocessed during a run.
   * "failed": We failed to queue the identifiers for reprocessing. "cancelled": The reprocessing
   * request has been cancelled.
   */
  status: Status1;
  /**
   * Set if the status is "queued" or "reprocessed". The timestamp when the identifiers were queued
   * for reprocessing.
   */
  queuedAt: Date | null;
  /**
   * Set if the status is "reprocessed". The timestamp when the identifiers' clusters were
   * reprocessed.
   */
  reprocessedAt: Date | null;
  /**
   * Set if the status is "reprocessed". The ID of the run that reprocessed the identifiers'
   * clusters.
   */
  reprocessedRunId: string | null;
  /**
   * One result per identifier, in the order they were submitted. True if the identifier was found
   * in the graph at the start of the run that processed the request. Null until the request is
   * processed, and on requests submitted before this field existed on the API.
   */
  recordFound: boolean[] | null;
  /** If available, the error message from failing to queue the identifiers for reprocessing. */
  error: string | null;
};

export const idrReprocessStatusOutputSchema: Schema<IdrReprocessStatusOutput> =
  s.object<IdrReprocessStatusOutput>({
    status: status1Schema,
    queuedAt: s.nullable(s.dateTime()),
    reprocessedAt: s.nullable(s.dateTime()),
    reprocessedRunId: s.nullable(s.string()),
    recordFound: s.nullable(s.array(s.boolean())),
    error: s.nullable(s.string()),
  });
