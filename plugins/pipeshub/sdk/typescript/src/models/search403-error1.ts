import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error16Schema, type Error16 } from "./error16.js";

/** Error envelope for a failed request. */
export type Search403Error1 = {
  /** Error payload. */
  error: Error16;
};

export const search403Error1Schema: Schema<Search403Error1> = s.object<Search403Error1>({
  error: error16Schema,
});
