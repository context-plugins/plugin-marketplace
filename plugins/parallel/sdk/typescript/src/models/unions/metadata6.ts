import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { metadata1Schema, type Metadata1 } from "./metadata1.js";

/** User-provided metadata stored with the group. */
export type Metadata6 = Record<string, Metadata1>;

export const metadata6Schema: Schema<Metadata6> = s.of<Metadata6>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => metadata1Schema),
    ),
  ]),
);
