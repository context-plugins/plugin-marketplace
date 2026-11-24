import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kindSchema, type Kind } from "./kind.js";

export type Result = {
  ein?: string;
  name?: string;
  /** Human-readable kind: Grantmaking foundation or Nonprofit. */
  type?: string;
  kind?: Kind;
  /** US state, two-letter code. */
  location?: string | null;
  /** Absolute canonical URL of the organization's page — stable, and citable. */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const resultProperties: s.Shape<Result> = {
  ein: s.optional(s.string()),
  name: s.optional(s.string()),
  type: s.optional(s.string()),
  kind: s.optional(s.lazy(() => kindSchema)),
  location: s.optionalNullable(s.string()),
  url: s.optional(s.string()),
};

export const resultInternalSchema: Schema<Result> = s.object<Result>(resultProperties, {
  additionalProperties: s.json(),
});

export const resultSchema: Schema<Result> = s.lazySchema(() =>
  s.object<Result>(
    {
      ...resultProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
