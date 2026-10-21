import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemovedCollections = {
  /** IDs of Collections from which a document is removed. */
  removedCollections?: number[];
};

export const removedCollectionsSchema: Schema<RemovedCollections> = s.object<RemovedCollections>({
  removedCollections: s.optional(s.array(s.int())),
});
