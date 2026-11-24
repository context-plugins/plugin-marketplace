import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Detail = {
  path: string;
  message: string;
};

export const detailSchema: Schema<Detail> = s.object<Detail>({
  path: s.string(),
  message: s.string(),
});
