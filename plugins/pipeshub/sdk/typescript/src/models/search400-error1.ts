import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error14Schema, type Error14 } from "./error14.js";

/** Error envelope for a failed request. */
export type Search400Error1 = {
  /** Error payload. */
  error: Error14;
};

export const search400Error1Schema: Schema<Search400Error1> = s.object<Search400Error1>({
  error: error14Schema,
});
