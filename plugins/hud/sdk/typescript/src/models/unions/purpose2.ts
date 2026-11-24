import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { purposeSchema, type Purpose } from "../purpose.js";

export type Purpose2 = Purpose;

export const purpose2Schema: Schema<Purpose2> = s.of<Purpose2>(s.union([s.lazy(() => purposeSchema)]));
