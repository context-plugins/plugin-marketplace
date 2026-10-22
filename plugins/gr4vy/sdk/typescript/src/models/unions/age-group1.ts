import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { ageGroupSchema, type AgeGroup } from "../age-group.js";

/** The age group for the passenger. */
export type AgeGroup1 = AgeGroup;

export const ageGroup1Schema: Schema<AgeGroup1> = s.of<AgeGroup1>(s.union([s.lazy(() => ageGroupSchema)]));
