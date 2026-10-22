import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Evidence = {
  total: number;
  byType: Record<string, number>;
};

export const evidenceSchema: Schema<Evidence> = s.object<Evidence>({
  total: s.int(),
  byType: s.record(s.string(), s.int()),
  _keysMap: {
    byType: "by_type",
  },
});
