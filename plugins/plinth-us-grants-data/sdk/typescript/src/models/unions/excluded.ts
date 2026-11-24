import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { excluded1Schema, type Excluded1 } from "./excluded1.js";

/**
 * Per-class cost of `?exclude=`, keyed by class name, plus `overlapping` — true when classes were
 * counted independently and therefore sum to more than the whole. /grants/summary only.
 */
export type Excluded = Record<string, Excluded1>;

export const excludedSchema: Schema<Excluded> = s.of<Excluded>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => excluded1Schema),
    ),
  ]),
);
