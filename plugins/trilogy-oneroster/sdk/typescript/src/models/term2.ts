import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Term2 = {
  sourcedId: string;
};

export const term2Schema: Schema<Term2> = s.object<Term2>({
  sourcedId: s.string(),
});
