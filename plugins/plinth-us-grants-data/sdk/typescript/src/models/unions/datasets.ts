import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { datasetStampSchema, type DatasetStamp } from "../dataset-stamp.js";

/**
 * Every corpus this response could have drawn on, each with its own licence terms. /sql only: you
 * write the query, so which corpus answered is not knowable per response — honour every licence
 * listed.
 */
export type Datasets = DatasetStamp[];

export const datasetsSchema: Schema<Datasets> = s.of<Datasets>(
  s.union([s.array(s.lazy(() => datasetStampSchema))]),
);
