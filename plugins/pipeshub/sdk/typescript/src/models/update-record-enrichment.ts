import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

/** Fields merged into successful record-update responses (Node gateway and Local KB connector). */
export type UpdateRecordEnrichment = {
  /** Epoch milliseconds when the response was generated */
  timestamp?: number;
  fileUpdated?: boolean;
  location?: Location;
  kb?: Record<string, unknown>;
  userPermission?: string;
};

export const updateRecordEnrichmentSchema: Schema<UpdateRecordEnrichment> = s.object<UpdateRecordEnrichment>({
  timestamp: s.optional(s.int()),
  fileUpdated: s.optional(s.boolean()),
  location: s.optional(s.lazy(() => locationSchema)),
  kb: s.optional(s.record(s.string(), s.unknown())),
  userPermission: s.optional(s.string()),
});
