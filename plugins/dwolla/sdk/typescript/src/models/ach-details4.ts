import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { source2Schema, type Source2 } from "./source2.js";

export type AchDetails4 = {
  source?: Source2;
};

export const achDetails4Schema: Schema<AchDetails4> = s.object<AchDetails4>({
  source: s.optional(s.lazy(() => source2Schema)),
});
