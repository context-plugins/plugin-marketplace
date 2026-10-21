import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data3 = {
  id: string;
  name: string;
  chains: string[];
  status: string;
};

export const data3Schema: Schema<Data3> = s.object<Data3>({
  id: s.string(),
  name: s.string(),
  chains: s.array(s.string()),
  status: s.string(),
});
