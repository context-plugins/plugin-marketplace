import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { collectSchema, type Collect } from "../collect.js";
import { collect1Schema, type Collect1 } from "../collect1.js";

export type Collect2 = Collect | Collect1;

export const collect2Schema: Schema<Collect2> = s.of<Collect2>(
  s.union([s.lazy(() => collectSchema), s.lazy(() => collect1Schema)]),
);
