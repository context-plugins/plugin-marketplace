import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error21Schema, type Error21 } from "./error21.js";

export type Search404Error = {
  error: Error21;
};

export const search404ErrorSchema: Schema<Search404Error> = s.object<Search404Error>({
  error: error21Schema,
});
