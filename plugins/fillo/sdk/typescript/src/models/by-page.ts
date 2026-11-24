import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ByPage = {
  page: number;
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const byPageSchema: Schema<ByPage> = s.object<ByPage>(
  {
    page: s.int(),
    count: s.int(),
  },
  { additionalProperties: s.json() },
);
