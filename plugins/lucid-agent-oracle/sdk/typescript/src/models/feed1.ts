import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Feed1 = {
  id: string;
  name: string;
  description: string;
  version: number;
  methodologyUrl: string;
};

export const feed1Schema: Schema<Feed1> = s.object<Feed1>({
  id: s.string(),
  name: s.string(),
  description: s.string(),
  version: s.int(),
  methodologyUrl: s.string(),
  _keysMap: {
    methodologyUrl: "methodology_url",
  },
});
