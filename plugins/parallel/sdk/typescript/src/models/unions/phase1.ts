import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { phaseSchema, type Phase } from "../phase.js";

export type Phase1 = Phase;

export const phase1Schema: Schema<Phase1> = s.of<Phase1>(s.union([s.lazy(() => phaseSchema)]));
