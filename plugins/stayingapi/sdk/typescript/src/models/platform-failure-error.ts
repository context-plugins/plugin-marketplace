import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeStayingDataApiSchema, type CodeStayingDataApi } from "./code-staying-data-api.js";
import { typeSchema, type Type } from "./type.js";

export type PlatformFailureError = {
  type: Type;
  code: CodeStayingDataApi;
  message: string;
  retryable: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const platformFailureErrorProperties: s.Shape<PlatformFailureError> = {
  type: typeSchema,
  code: codeStayingDataApiSchema,
  message: s.string(),
  retryable: s.boolean(),
};

export const platformFailureErrorInternalSchema: Schema<PlatformFailureError> =
  s.object<PlatformFailureError>(platformFailureErrorProperties, { additionalProperties: s.json() });

export const platformFailureErrorSchema: Schema<PlatformFailureError> = s.lazySchema(() =>
  s.object<PlatformFailureError>(
    {
      ...platformFailureErrorProperties,
      message: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
