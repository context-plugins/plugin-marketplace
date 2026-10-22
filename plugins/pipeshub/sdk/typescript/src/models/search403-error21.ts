import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error20Schema, type Error20 } from "./error20.js";

export type Search403Error21 = {
  error: Error20;
};

export const search403Error21Schema: Schema<Search403Error21> = s.object<Search403Error21>({
  error: error20Schema,
});
