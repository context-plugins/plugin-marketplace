import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A step of a check that did not finish.
 *
 * ``reason`` is shown to everyone who can read the result, so producers write it from code: no
 * model output, raw analysis context, or credentials.
 */
export type QaExecutionError = {
  stage: string;
  reason: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const qaExecutionErrorProperties: s.Shape<QaExecutionError> = {
  stage: s.string(),
  reason: s.string(),
};

export const qaExecutionErrorInternalSchema: Schema<QaExecutionError> = s.object<QaExecutionError>(
  qaExecutionErrorProperties,
  { additionalProperties: s.json() },
);

export const qaExecutionErrorSchema: Schema<QaExecutionError> = s.lazySchema(() =>
  s.object<QaExecutionError>(
    {
      ...qaExecutionErrorProperties,
      stage: s.string().check(s.minLength(1), s.maxLength(64), s.pattern("^[a-z][a-z0-9_]*$")),
      reason: s.string().check(s.minLength(1), s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
