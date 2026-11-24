import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { traceThumbnailModelSchema, type TraceThumbnailModel } from "../trace-thumbnail-model.js";

export type Model2 = TraceThumbnailModel;

export const model2Schema: Schema<Model2> = s.of<Model2>(s.union([s.lazy(() => traceThumbnailModelSchema)]));
