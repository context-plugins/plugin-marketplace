import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { creator1Schema, type Creator1 } from "../creator1.js";

/** The user that created this resource */
export type Creator11 = Creator1;

export const creator11Schema: Schema<Creator11> = s.of<Creator11>(s.union([s.lazy(() => creator1Schema)]));
