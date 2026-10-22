import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /debug/{datasource}/document/events API call. */
export type DebugDocumentLifecycleRequest = {
  /** Object type of the document to get lifecycle events for. */
  objectType: string;
  /** Glean Document ID within the datasource to get lifecycle events for. */
  docId: string;
  /**
   * The start date for events to be fetched. Cannot be more than 30 days (default 7 days) in the
   * past.
   */
  startDate?: string;
  /** Max number of events to be fetched. Cannot be more than 100 (default 20). */
  maxEvents?: number;
};

export const debugDocumentLifecycleRequestSchema: Schema<DebugDocumentLifecycleRequest> =
  s.object<DebugDocumentLifecycleRequest>({
    objectType: s.string(),
    docId: s.string(),
    startDate: s.optional(s.string()),
    maxEvents: s.optional(s.int()),
  });
