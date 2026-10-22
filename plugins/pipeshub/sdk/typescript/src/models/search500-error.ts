import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error17Schema, type Error17 } from "./error17.js";

/** Error envelope for a failed request. */
export type Search500Error = {
  /** Error payload. */
  error: Error17;
};

export const search500ErrorSchema: Schema<Search500Error> = s.object<Search500Error>({
  error: error17Schema,
});
