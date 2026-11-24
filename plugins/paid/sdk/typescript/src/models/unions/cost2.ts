import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { costSchema, type Cost } from "../cost.js";
import { cost1Schema, type Cost1 } from "../cost1.js";

export type Cost2 = Cost | Cost1;

export const cost2Schema: Schema<Cost2> = s.of<Cost2>(
  s.union([s.lazy(() => costSchema), s.lazy(() => cost1Schema)]),
);
