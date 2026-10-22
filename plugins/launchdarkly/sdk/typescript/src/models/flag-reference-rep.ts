import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagReferenceRep = {
  /** The project key */
  projectKey: string;
  /** The flag key */
  flagKey: string;
  /** The number of references added */
  referencesAdded: number;
  /** The number of references removed */
  referencesRemoved: number;
};

export const flagReferenceRepSchema: Schema<FlagReferenceRep> = s.object<FlagReferenceRep>({
  projectKey: s.string(),
  flagKey: s.string(),
  referencesAdded: s.int(),
  referencesRemoved: s.int(),
});
