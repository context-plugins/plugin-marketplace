import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Current = {
  start: string | null;
  end: string | null;
};

export const currentSchema: Schema<Current> = s.object<Current>({
  start: s.nullable(s.string()),
  end: s.nullable(s.string()),
});
