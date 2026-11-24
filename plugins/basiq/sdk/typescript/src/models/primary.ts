import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Primary = {
  title: string;
  description: string;
};

export const primarySchema: Schema<Primary> = s.object<Primary>({
  title: s.string(),
  description: s.string(),
});
