import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error15Schema, type Error15 } from "./error15.js";

/** Error envelope for a failed request. */
export type Search401Error1 = {
  /** Error payload. */
  error: Error15;
};

export const search401Error1Schema: Schema<Search401Error1> = s.object<Search401Error1>({
  error: error15Schema,
});
