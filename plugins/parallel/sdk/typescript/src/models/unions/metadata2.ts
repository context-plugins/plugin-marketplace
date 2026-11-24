import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { metadata1Schema, type Metadata1 } from "./metadata1.js";

/** User-provided metadata stored with the run. */
export type Metadata2 = Record<string, Metadata1>;

export const metadata2Schema: Schema<Metadata2> = s.of<Metadata2>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => metadata1Schema),
    ),
  ]),
);
