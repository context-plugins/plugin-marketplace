import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetSchema, type Dataset } from "./unions/dataset.js";
import { datasetsSchema, type Datasets } from "./unions/datasets.js";
import { excludedSchema, type Excluded } from "./unions/excluded.js";
import { unidentified1Schema, type Unidentified1 } from "./unions/unidentified1.js";
import { unsupportedSchema, type Unsupported } from "./unions/unsupported.js";
import { warningsSchema, type Warnings } from "./unions/warnings.js";

/** Non-Candid metadata. Safe to ignore for compatibility; `unsupported` is the one to assert on. */
export type XPlinth = {
  warnings?: Warnings;
  /** Parameters that did not apply. Non-empty means the answer is not the question asked. */
  unsupported?: Unsupported;
  dataset?: Dataset;
  /**
   * Every corpus this response could have drawn on, each with its own licence terms. /sql only: you
   * write the query, so which corpus answered is not knowable per response — honour every licence
   * listed.
   */
  datasets?: Datasets;
  /**
   * Per-class cost of `?exclude=`, keyed by class name, plus `overlapping` — true when classes were
   * counted independently and therefore sum to more than the whole. /grants/summary only.
   */
  excluded?: Excluded;
  /**
   * On /grants/recipients: the grants held out of the ranking because their recipient is a person,
   * a class of people, or nobody the filer named. Add these back to reconcile with /grants/summary.
   */
  unidentified?: Unidentified1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const xPlinthSchema: Schema<XPlinth> = s.object<XPlinth>(
  {
    warnings: s.optional(s.lazy(() => warningsSchema)),
    unsupported: s.optional(s.lazy(() => unsupportedSchema)),
    dataset: s.optional(s.lazy(() => datasetSchema)),
    datasets: s.optional(s.lazy(() => datasetsSchema)),
    excluded: s.optional(s.lazy(() => excludedSchema)),
    unidentified: s.optional(s.lazy(() => unidentified1Schema)),
  },
  { additionalProperties: s.json() },
);
