import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sportSchema, type Sport } from "../sport.js";
import { v2SportsResponseSchema, type V2SportsResponse } from "../v2-sports-response.js";

export type V2SportsResponse1 = V2SportsResponse | Sport[];

export const v2SportsResponse1Schema: Schema<V2SportsResponse1> = s.of<V2SportsResponse1>(
  s.union([s.lazy(() => v2SportsResponseSchema), s.array(s.lazy(() => sportSchema))]),
);
