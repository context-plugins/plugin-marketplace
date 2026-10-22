import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Current1 = {
  start?: string | null;
  end?: string | null;
};

export const current1Schema: Schema<Current1> = s.object<Current1>({
  start: s.optionalNullable(s.string()),
  end: s.optionalNullable(s.string()),
});
