import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Trace = {
  id: string;
};

export const traceSchema: Schema<Trace> = s.object<Trace>({
  id: s.string(),
});
