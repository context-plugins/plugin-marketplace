import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type MaxFailedPage = {
  page: number;
  code: Code;
  attempts: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const maxFailedPageProperties: s.Shape<MaxFailedPage> = {
  page: s.int(),
  code: codeSchema,
  attempts: s.int(),
};

export const maxFailedPageInternalSchema: Schema<MaxFailedPage> = s.object<MaxFailedPage>(
  maxFailedPageProperties,
  { additionalProperties: s.json() },
);

export const maxFailedPageSchema: Schema<MaxFailedPage> = s.lazySchema(() =>
  s.object<MaxFailedPage>(
    {
      ...maxFailedPageProperties,
      page: s.int().check(s.gte(1)),
      attempts: s.int().check(s.gte(1), s.lte(2)),
    },
    { additionalProperties: s.json() },
  ),
);
