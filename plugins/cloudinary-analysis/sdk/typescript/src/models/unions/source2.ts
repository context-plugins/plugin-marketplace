import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sourceSchema, type Source } from "../source.js";
import { source1Schema, type Source1 } from "../source1.js";

export type Source2 = Source | Source1;

export const source2Schema: Schema<Source2> = s.of<Source2>(
  s.union([s.lazy(() => sourceSchema), s.lazy(() => source1Schema)]),
);
