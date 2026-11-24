import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { datasetStampSchema, type DatasetStamp } from "../dataset-stamp.js";

export type Dataset = DatasetStamp;

export const datasetSchema: Schema<Dataset> = s.of<Dataset>(s.union([s.lazy(() => datasetStampSchema)]));
