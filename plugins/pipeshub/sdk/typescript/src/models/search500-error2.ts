import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error22Schema, type Error22 } from "./error22.js";

export type Search500Error2 = {
  error: Error22;
};

export const search500Error2Schema: Schema<Search500Error2> = s.object<Search500Error2>({
  error: error22Schema,
});
