import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailSchema, type Detail } from "./unions/detail.js";

/** FastAPI wraps endpoint errors in a top-level ``detail`` field. */
export type ApiKeySpendLimitErrorError = {
  detail: Detail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiKeySpendLimitErrorErrorSchema: Schema<ApiKeySpendLimitErrorError> =
  s.object<ApiKeySpendLimitErrorError>(
    {
      detail: detailSchema,
    },
    { additionalProperties: s.json() },
  );
