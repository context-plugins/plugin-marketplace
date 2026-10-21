import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error19Schema, type Error19 } from "./error19.js";

export type Search401Error21 = {
  error: Error19;
};

export const search401Error21Schema: Schema<Search401Error21> = s.object<Search401Error21>({
  error: error19Schema,
});
