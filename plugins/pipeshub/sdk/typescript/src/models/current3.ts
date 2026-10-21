import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Current3 = {
  start?: Date | null;
  end?: Date | null;
};

export const current3Schema: Schema<Current3> = s.object<Current3>({
  start: s.optionalNullable(s.dateTime()),
  end: s.optionalNullable(s.dateTime()),
});
