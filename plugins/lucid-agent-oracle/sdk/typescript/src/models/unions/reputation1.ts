import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reputationSchema, type Reputation } from "../reputation.js";

export type Reputation1 = Reputation;

export const reputation1Schema: Schema<Reputation1> = s.of<Reputation1>(
  s.union([s.lazy(() => reputationSchema)]),
);
