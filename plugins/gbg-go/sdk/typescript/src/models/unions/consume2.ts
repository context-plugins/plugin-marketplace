import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { consumeSchema, type Consume } from "../consume.js";
import { consume1Schema, type Consume1 } from "../consume1.js";

export type Consume2 = Consume | Consume1;

export const consume2Schema: Schema<Consume2> = s.of<Consume2>(
  s.union([s.lazy(() => consumeSchema), s.lazy(() => consume1Schema)]),
);
