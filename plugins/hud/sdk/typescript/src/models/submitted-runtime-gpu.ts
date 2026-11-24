import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1InternalSchema, type1Schema, type Type1 } from "./unions/type1.js";

/** Wire-compatible subset of ``hud.eval.runtime.RuntimeGPU``. */
export type SubmittedRuntimeGpu = {
  type?: Type1;
  /** @default 1 */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const submittedRuntimeGpuProperties: s.Shape<SubmittedRuntimeGpu> = {
  type: s.optional(s.lazy(() => type1InternalSchema)),
  count: s.defaulted(s.int(), 1),
};

export const submittedRuntimeGpuInternalSchema: Schema<SubmittedRuntimeGpu> = s.object<SubmittedRuntimeGpu>(
  submittedRuntimeGpuProperties,
  { additionalProperties: s.json() },
);

export const submittedRuntimeGpuSchema: Schema<SubmittedRuntimeGpu> = s.lazySchema(() =>
  s.object<SubmittedRuntimeGpu>(
    {
      ...submittedRuntimeGpuProperties,
      type: s.optional(s.lazy(() => type1Schema)),
      count: s.defaulted(s.int().check(s.gte(1)), 1),
    },
    { additionalProperties: s.json() },
  ),
);
