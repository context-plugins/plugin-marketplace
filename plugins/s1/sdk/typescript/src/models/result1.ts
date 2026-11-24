import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";
import { newsResponseInternalSchema, newsResponseSchema, type NewsResponse } from "./news-response.js";

export type Result1 = {
  success: boolean;
  data?: NewsResponse;
  error?: Error2;
  cost: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result1Properties: s.Shape<Result1> = {
  success: s.boolean(),
  data: s.optional(s.lazy(() => newsResponseInternalSchema)),
  error: s.optional(s.lazy(() => error2Schema)),
  cost: s.int(),
};

export const result1InternalSchema: Schema<Result1> = s.object<Result1>(result1Properties, {
  additionalProperties: s.json(),
});

export const result1Schema: Schema<Result1> = s.lazySchema(() =>
  s.object<Result1>(
    {
      ...result1Properties,
      data: s.optional(s.lazy(() => newsResponseSchema)),
      cost: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
