import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stats1Schema, type Stats1 } from "./stats1.js";

export type Data4 = {
  id: string;
  name: string;
  chains: string[];
  status: string;
  stats: Stats1;
};

export const data4Schema: Schema<Data4> = s.object<Data4>({
  id: s.string(),
  name: s.string(),
  chains: s.array(s.string()),
  status: s.string(),
  stats: stats1Schema,
});
