import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Tool1 = {
  /** Tool node key in the backing graph store. */
  key?: string;
  name?: string;
  fullName?: string;
  description?: string;
};

export const tool1Schema: Schema<Tool1> = s.object<Tool1>({
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  fullName: s.optional(s.string()),
  description: s.optional(s.string()),
  _keysMap: {
    key: "_key",
  },
});
