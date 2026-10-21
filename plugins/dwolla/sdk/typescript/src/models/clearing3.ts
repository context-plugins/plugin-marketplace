import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Clearing3 = {
  source?: string;
};

export const clearing3Schema: Schema<Clearing3> = s.object<Clearing3>({
  source: s.optional(s.string()),
});
