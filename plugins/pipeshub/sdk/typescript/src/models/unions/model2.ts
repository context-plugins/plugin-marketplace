import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { modelSchema, type Model } from "../model.js";

export type Model2 = string | Model;

export const model2Schema: Schema<Model2> = s.of<Model2>(s.union([s.string(), s.lazy(() => modelSchema)]));
