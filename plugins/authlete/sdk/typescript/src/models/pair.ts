import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Pair = {
  /** The key part. */
  key?: string;
  /** The value part. */
  value?: string;
};

export const pairSchema: Schema<Pair> = s.object<Pair>({
  key: s.optional(s.string()),
  value: s.optional(s.string()),
});
