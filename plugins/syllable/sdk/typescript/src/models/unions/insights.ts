import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { insights1Schema, type Insights1 } from "./insights1.js";

/** Insights from call */
export type Insights = Record<string, Insights1>;

export const insightsSchema: Schema<Insights> = s.of<Insights>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => insights1Schema),
    ),
  ]),
);
