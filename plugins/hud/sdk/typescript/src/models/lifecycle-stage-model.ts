import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LifecycleStageModel = {
  key: string;
  label: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const lifecycleStageModelProperties: s.Shape<LifecycleStageModel> = {
  key: s.string(),
  label: s.string(),
};

export const lifecycleStageModelInternalSchema: Schema<LifecycleStageModel> = s.object<LifecycleStageModel>(
  lifecycleStageModelProperties,
  { additionalProperties: s.json() },
);

export const lifecycleStageModelSchema: Schema<LifecycleStageModel> = s.lazySchema(() =>
  s.object<LifecycleStageModel>(
    {
      ...lifecycleStageModelProperties,
      label: s.string().check(s.minLength(1), s.maxLength(80)),
    },
    { additionalProperties: s.json() },
  ),
);
