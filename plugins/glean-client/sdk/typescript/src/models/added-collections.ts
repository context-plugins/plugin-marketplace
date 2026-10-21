import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddedCollections = {
  /** IDs of Collections to which a document is added. */
  addedCollections?: number[];
};

export const addedCollectionsSchema: Schema<AddedCollections> = s.object<AddedCollections>({
  addedCollections: s.optional(s.array(s.int())),
});
