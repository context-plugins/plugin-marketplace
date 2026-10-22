import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Conflicts = {
  active: number;
  resolved: number;
};

export const conflictsSchema: Schema<Conflicts> = s.object<Conflicts>({
  active: s.int(),
  resolved: s.int(),
});
