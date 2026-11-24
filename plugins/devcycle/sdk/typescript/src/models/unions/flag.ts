import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  ofrepEvaluationFailureInternalSchema,
  ofrepEvaluationFailureSchema,
  type OfrepEvaluationFailure,
} from "../ofrep-evaluation-failure.js";
import {
  ofrepEvaluationSuccessInternalSchema,
  ofrepEvaluationSuccessSchema,
  type OfrepEvaluationSuccess,
} from "../ofrep-evaluation-success.js";

export type Flag = OfrepEvaluationSuccess | OfrepEvaluationFailure;

export const flagInternalSchema: Schema<Flag> = s.of<Flag>(
  s.union([
    s.lazy(() => ofrepEvaluationSuccessInternalSchema),
    s.lazy(() => ofrepEvaluationFailureInternalSchema),
  ]),
);

export const flagSchema: Schema<Flag> = s.lazySchema(() =>
  s.of<Flag>(
    s.union([s.lazy(() => ofrepEvaluationSuccessSchema), s.lazy(() => ofrepEvaluationFailureSchema)]),
  ),
);
