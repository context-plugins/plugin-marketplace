import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaggedValue = {
  /** The language tag part. */
  tag?: string;
  /** The value part. */
  value?: string;
};

export const taggedValueSchema: Schema<TaggedValue> = s.object<TaggedValue>({
  tag: s.optional(s.string()),
  value: s.optional(s.string()),
});
