import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { directionSchema, type Direction } from "./direction.js";

export type Sort = {
  field?: string;
  direction?: Direction;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sortSchema: Schema<Sort> = s.object<Sort>(
  {
    field: s.optional(s.string()),
    direction: s.optional(s.lazy(() => directionSchema)),
  },
  { additionalProperties: s.json() },
);
