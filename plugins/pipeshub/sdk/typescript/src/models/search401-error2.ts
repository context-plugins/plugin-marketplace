import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error19Schema, type Error19 } from "./error19.js";

export type Search401Error2 = {
  error: Error19;
};

export const search401Error2Schema: Schema<Search401Error2> = s.object<Search401Error2>({
  error: error19Schema,
});
