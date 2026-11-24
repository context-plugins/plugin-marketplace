import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item1Schema, type Item1 } from "./item1.js";

export type Result = {
  postId: string;
  items: Item1[];
  error: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    postId: s.string(),
    items: s.array(s.lazy(() => item1Schema)),
    error: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
