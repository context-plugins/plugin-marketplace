import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { verdictSchema, type Verdict } from "../verdict.js";

export type Verdict1 = Verdict;

export const verdict1Schema: Schema<Verdict1> = s.of<Verdict1>(s.union([s.lazy(() => verdictSchema)]));
