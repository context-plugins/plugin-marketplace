import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { columns2Schema, type Columns2 } from "./columns2.js";

export type Columns1 = Record<string, Columns2>;

export const columns1Schema: Schema<Columns1> = s.of<Columns1>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => columns2Schema),
    ),
  ]),
);
