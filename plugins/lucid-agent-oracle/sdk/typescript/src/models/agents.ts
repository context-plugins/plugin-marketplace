import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Agents = {
  total: number;
  byLinkType: Record<string, number>;
};

export const agentsSchema: Schema<Agents> = s.object<Agents>({
  total: s.int(),
  byLinkType: s.record(s.string(), s.int()),
  _keysMap: {
    byLinkType: "by_link_type",
  },
});
