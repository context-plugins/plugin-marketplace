import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flagReferenceRepSchema, type FlagReferenceRep } from "./flag-reference-rep.js";

export type FlagReferenceCollectionRep = {
  /** The total number of flag references */
  totalCount: number;
  /** A list of flag references */
  items: FlagReferenceRep[];
};

export const flagReferenceCollectionRepSchema: Schema<FlagReferenceCollectionRep> =
  s.object<FlagReferenceCollectionRep>({
    totalCount: s.int(),
    items: s.array(s.lazy(() => flagReferenceRepSchema)),
  });
