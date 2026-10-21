import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Clearing = {
  source?: string;
  destination?: string;
};

export const clearingSchema: Schema<Clearing> = s.object<Clearing>({
  source: s.optional(s.string()),
  destination: s.optional(s.string()),
});
