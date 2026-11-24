import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Key facts and developments identified in the story. */
export type KeyPoint = {
  /** A key fact or development identified in the content. */
  point?: string | null;
  /** Article IDs supporting the key point. */
  references?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const keyPointSchema: Schema<KeyPoint> = s.object<KeyPoint>(
  {
    point: s.optionalNullable(s.string()),
    references: s.optionalNullable(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
