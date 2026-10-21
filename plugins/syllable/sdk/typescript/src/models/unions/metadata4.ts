import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { metadata5Schema, type Metadata5 } from "./metadata5.js";

/** Meta-data associated with the uploaded file */
export type Metadata4 = Record<string, Metadata5>;

export const metadata4Schema: Schema<Metadata4> = s.of<Metadata4>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => metadata5Schema),
    ),
  ]),
);
