import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Editorial labels assigned to the article. */
export type LabelHolder = {
  /** Editorial label assigned to the article. */
  name?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelHolderSchema: Schema<LabelHolder> = s.object<LabelHolder>(
  {
    name: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
