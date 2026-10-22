import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Revision = {
  /** Auto-generated sub-document identifier */
  id?: string;
  /** Names of feedback fields modified in this revision */
  updatedFields?: string[];
  /**
   * Map of previously-set values for the fields named in `updatedFields`, keyed by field name.
   * Stored as a Mongoose Map of Mixed values.
   */
  previousValues?: Record<string, unknown>;
  updatedBy?: string;
  /** Time the revision was recorded, as epoch milliseconds. */
  updatedAt?: number;
};

export const revisionSchema: Schema<Revision> = s.object<Revision>({
  id: s.optional(s.string()),
  updatedFields: s.optional(s.array(s.string())),
  previousValues: s.optional(s.record(s.string(), s.unknown())),
  updatedBy: s.optional(s.string()),
  updatedAt: s.optional(s.int()),
  _keysMap: {
    id: "_id",
  },
});
