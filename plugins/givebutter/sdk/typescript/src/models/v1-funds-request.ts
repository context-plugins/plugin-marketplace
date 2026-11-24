import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1FundsRequest = {
  name: string;
  code?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1FundsRequestProperties: s.Shape<V1FundsRequest> = {
  name: s.string(),
  code: s.optionalNullable(s.string()),
};

export const v1FundsRequestInternalSchema: Schema<V1FundsRequest> = s.object<V1FundsRequest>(
  v1FundsRequestProperties,
  { additionalProperties: s.json() },
);

export const v1FundsRequestSchema: Schema<V1FundsRequest> = s.lazySchema(() =>
  s.object<V1FundsRequest>(
    {
      ...v1FundsRequestProperties,
      name: s.string().check(s.maxLength(255)),
      code: s.optionalNullable(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
