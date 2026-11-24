import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { unidentifiedSchema, type Unidentified } from "../unidentified.js";

/**
 * On /grants/recipients: the grants held out of the ranking because their recipient is a person, a
 * class of people, or nobody the filer named. Add these back to reconcile with /grants/summary.
 */
export type Unidentified1 = Unidentified;

export const unidentified1Schema: Schema<Unidentified1> = s.of<Unidentified1>(
  s.union([s.lazy(() => unidentifiedSchema)]),
);
