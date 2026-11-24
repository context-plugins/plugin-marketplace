import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";
import {
  searchResponseInternalSchema,
  searchResponseSchema,
  type SearchResponse,
} from "./search-response.js";

export type Result = {
  success: boolean;
  data?: SearchResponse;
  error?: Error2;
  cost: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const resultProperties: s.Shape<Result> = {
  success: s.boolean(),
  data: s.optional(s.lazy(() => searchResponseInternalSchema)),
  error: s.optional(s.lazy(() => error2Schema)),
  cost: s.int(),
};

export const resultInternalSchema: Schema<Result> = s.object<Result>(resultProperties, {
  additionalProperties: s.json(),
});

export const resultSchema: Schema<Result> = s.lazySchema(() =>
  s.object<Result>(
    {
      ...resultProperties,
      data: s.optional(s.lazy(() => searchResponseSchema)),
      cost: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
