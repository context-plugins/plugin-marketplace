import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error15Schema, type Error15 } from "./error15.js";

/** Error envelope for a failed request. */
export type Search401Error = {
  /** Error payload. */
  error: Error15;
};

export const search401ErrorSchema: Schema<Search401Error> = s.object<Search401Error>({
  error: error15Schema,
});
