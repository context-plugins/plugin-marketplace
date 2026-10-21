import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hunkRepSchema, type HunkRep } from "./hunk-rep.js";

export type ReferenceRep = {
  /** File path of the reference */
  path: string;
  /** Programming language used in the file */
  hint?: string;
  hunks: HunkRep[];
};

export const referenceRepSchema: Schema<ReferenceRep> = s.object<ReferenceRep>({
  path: s.string(),
  hint: s.optional(s.string()),
  hunks: s.array(s.lazy(() => hunkRepSchema)),
});
