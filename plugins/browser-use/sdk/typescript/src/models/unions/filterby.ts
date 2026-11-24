import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { browserSessionStatusSchema, type BrowserSessionStatus } from "../browser-session-status.js";

export type Filterby = BrowserSessionStatus;

export const filterbySchema: Schema<Filterby> = s.of<Filterby>(
  s.union([s.lazy(() => browserSessionStatusSchema)]),
);
