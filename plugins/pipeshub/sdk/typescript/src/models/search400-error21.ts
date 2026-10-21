import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error18Schema, type Error18 } from "./error18.js";

export type Search400Error21 = {
  error: Error18;
};

export const search400Error21Schema: Schema<Search400Error21> = s.object<Search400Error21>({
  error: error18Schema,
});
