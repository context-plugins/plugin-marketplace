import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { metSchema, type Met } from "../met.js";

export type Met1 = boolean | Met;

export const met1Schema: Schema<Met1> = s.of<Met1>(s.union([s.boolean(), s.lazy(() => metSchema)]));
