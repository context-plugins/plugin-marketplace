import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error21Schema, type Error21 } from "./error21.js";

export type Search404Error1 = {
  error: Error21;
};

export const search404Error1Schema: Schema<Search404Error1> = s.object<Search404Error1>({
  error: error21Schema,
});
