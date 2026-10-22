import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Data4 = {
  caption: string;
};

export const data4Schema: Schema<Data4> = s.object<Data4>({
  caption: s.string(),
});
