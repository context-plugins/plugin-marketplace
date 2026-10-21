import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { latestSchema, type Latest } from "../latest.js";

export type Latest1 = Latest;

export const latest1Schema: Schema<Latest1> = s.of<Latest1>(s.union([s.lazy(() => latestSchema)]));
