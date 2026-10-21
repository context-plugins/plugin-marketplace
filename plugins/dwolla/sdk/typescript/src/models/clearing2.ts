import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Clearing2 = {
  destination?: string;
};

export const clearing2Schema: Schema<Clearing2> = s.object<Clearing2>({
  destination: s.optional(s.string()),
});
