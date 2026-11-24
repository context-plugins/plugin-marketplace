import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { warningSchema, type Warning } from "../warning.js";

/** Warnings for the extract request, if any. */
export type Warnings = Warning[];

export const warningsSchema: Schema<Warnings> = s.of<Warnings>(
  s.union([s.array(s.lazy(() => warningSchema))]),
);
