import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Creates events based on entries collected from the host’s network routes */
export type Routes2 = {
  /** Enabled */
  enable?: boolean;
};

export const routes2Schema: Schema<Routes2> = s.object<Routes2>({
  enable: s.optional(s.boolean()),
});
