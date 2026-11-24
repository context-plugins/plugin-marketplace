import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

export type Error = {
  error: Error1;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  error: error1Schema,
});
